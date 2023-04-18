const {Chapitre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/chapitre/:id', (req, res) => {
        Chapitre.findByPk(req.params.id)
            .then(chapitre => {
                const message = `Le Chapitre ${req.params.id} a été trouvée`
                res.json({ message, data: chapitre })
            })
    })
}