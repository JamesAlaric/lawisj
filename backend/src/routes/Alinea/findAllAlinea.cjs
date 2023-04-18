const {Alinea} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/alinea', (req, res) => {
        Alinea.findAll()
            .then(alinea => {
                const message = 'La liste des alineas a bien été récupéré.'
                res.json({ message, data: alinea })
            })
    })
}