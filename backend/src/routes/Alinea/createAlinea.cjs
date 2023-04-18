const {Alinea} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/alinea', (req, res) => {
        Alinea.create(req.body)
            .then(alinea => {
                const message = `l'alinea ${req.body.id_alinea} a bien été crée`
                res.json({message , data : alinea})
            })
    })
}