const sequelizeDb = require('../../models/sequelize')
const Image = sequelizeDb.Image
const Op = sequelizeDb.Sequelize.Op
const fs = require('fs');

exports.create = async (req, res) => {
  try {
    const result = await req.imageService.uploadImage(req.files)
    res.status(200).send(result)
  } catch (error) {
    res.status(500).send({
      message: err.errors || 'Algún error ha surgido al insertar el dato.'
    })
  }
}

exports.findAll = (req, res) => {
  const result = []
  const folder = __dirname + '../../../storage/images/gallery/thumbnail/'
  try {
    const files = fs.readdirSync(folder);
    const result = files.map(file => {
      return file;
    });
    console.log(result);
    // Do whatever you want with 'result', maybe send it in the response
    res.json(result);
  } catch (err) {
    console.error('Error reading directory:', err);
    res.status(500).send('Internal Server Error');
  }
  // fs.readdir(folder, (err, files) => {
  //   files.forEach(file => {
  //     // console.log(file)
  //     result.push(file)
  //   })
  // })
  // console.log(result)
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

exports.delete = (req, res) => {
  const id = req.params.id

  Image.destroy({
    where: { id }
  }).then((numberRowsAffected) => {
    if (numberRowsAffected === 1) {
      res.status(200).send({
        message: 'El elemento ha sido borrado correctamente'
      })
    } else {
      res.status(404).send({
        message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
      })
    }
  }).catch(_ => {
    res.status(500).send({
      message: 'Algún error ha surgido al borrar la id=' + id
    })
  })
}
exports.getImage = (req, res) => {

}