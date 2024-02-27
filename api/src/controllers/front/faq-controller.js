const db = require('../../models')
const Faq = db.Faq
const Op = db.Sequelize.Op

exports.findAll = (req, res) => {

  Faq.findAndCountAll({
    attributes: ['name', 'order'],
    order: [['order', 'ASC']]
  })
    .then(result => {
      res.status(200).send(result)
    }).catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}