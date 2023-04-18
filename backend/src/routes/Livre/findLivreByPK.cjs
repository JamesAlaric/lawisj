const {Livre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/livre/:id', (req, res) => {
        Livre.findByPk(req.params.id)
            .then(livre => {
                const message = `Le Livre ${req.params.id} a été trouvée`
                res.json({ message, data: livre })
            })
    })
}