const {Chapitre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/chapitre', (req, res) => {
        Chapitre.findAll()
            .then(chapitre => {
                const message = 'La liste des chapitres a bien été récupéré.'
                res.json({ message, data: chapitre })
            })
    })
}