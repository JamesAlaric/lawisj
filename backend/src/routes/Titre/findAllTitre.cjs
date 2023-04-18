const {Titre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/titre', (req, res) => {
        Titre.findAll()
            .then(titre => {
                const message = 'La liste des titres a bien été récupéré.'
                res.json({ message, data: titre })
            })
    })
}