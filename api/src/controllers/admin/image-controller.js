const mongooseDb = require('../../models/mongoose')
const Image = mongooseDb.Image
const moment = require('moment')
const path = require('path')
const fs = require('fs')

exports.create = async (req, res) => {
  try {
    const result = await req.imageService.uploadImage(req.files)

    for (const filename of result) {
      await Image.create({ filename })
    }

    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido al insertar el dato.'
    })
  }
}

exports.findAll = async (req, res) => {
  try {
    const page = req.query.page || 1
    const limit = parseInt(req.query.size) || 10
    const offset = (page - 1) * limit
    const whereStatement = {}
    whereStatement.deletedAt = { $exists: false }

    const result = await Image.find(whereStatement)
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean()
      .exec()

    const count = await Image.countDocuments(whereStatement)

    const response = {
      rows: result.map(doc => ({
        ...doc,
        id: doc._id,
        _id: undefined,
        createdAt: moment(doc.createdAt).format('YYYY-MM-DD HH:mm'),
        updatedAt: moment(doc.updatedAt).format('YYYY-MM-DD HH:mm')
      })),
      meta: {
        total: count,
        pages: Math.ceil(count / limit),
        currentPage: page
      }
    }

    res.status(200).send(response)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Algún error ha surgido al recuperar los datos.'
    })
  }
}

exports.findOne = (req, res) => {
  const fileName = req.params.filename

  const options = {
    root: __dirname + '../../../storage/images/gallery/thumbnail/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options)
}

exports.update = (req, res) => {
  const id = req.params.id

  Image.update(req.body, {
    where: { id }
  }).then(([numberRowsAffected]) => {
    if (numberRowsAffected === 1) {
      res.status(200).send({
        message: 'El elemento ha sido actualizado correctamente.'
      })
    } else {
      res.status(404).send({
        message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
      })
    }
  }).catch(_ => {
    res.status(500).send({
      message: 'Algún error ha surgido al actualiazar la id=' + id
    })
  })
}

exports.delete = async (req, res) => {
  const filename = req.params.filename
  const folders = ['original','thumbnail']
  
  try {
    const data = await Image.findOneAndUpdate({filename}, { deletedAt: new Date() })
    
    if (data) {
      for (let i = 0; i < folders.length; i++) {
        const url = path.join(__dirname, `../../storage/images/gallery/${folders[i]}`, filename)
        fs.unlink(url, (err) => {
          if (err) {
            res.status(500).send({
              message: 'Error al borrar el archivo ' + filename
            })
          } else {
            console.log('File is deleted.')
          }
        })
      }
      res.status(200).send({
        message: 'El elemento ha sido borrado correctamente.'
      })
    } else {
      res.status(404).send({
        message: `No se puede borrar el elemento con la imagen ${filename}. Tal vez no se ha encontrado el elemento.`
      })
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: 'Algún error ha surgido al borrar la imagen ' + filename
    })
  }
}
exports.getImage = (req, res) => {

}