const {Chapitre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/chapitre', (req, res) => {
        Chapitre.create(req.body)
            .then(chapitre => {
                const message = `le chapitre ${req.body.libelle} a bien été crée`
                res.json({message , data : chapitre})
            })
    })
}