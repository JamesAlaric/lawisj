const {Titre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/titre/:id', (req, res) => {
        Titre.findByPk(req.params.id)
            .then(titre => {
                const message = `Le Titre ${req.params.id} a été trouvée`
                res.json({ message, data: titre })
            })
    })
}