const {Titre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/titre', (req, res) => {
        Titre.create(req.body)
            .then(titre => {
                const message = `le titre ${req.body.libelle} a bien été crée`
                res.json({message , data : titre})
            })
    })
}