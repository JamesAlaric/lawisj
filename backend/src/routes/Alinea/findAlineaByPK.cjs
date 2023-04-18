const {Alinea} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/alinea/:id', (req, res) => {
        Alinea.findByPk(req.params.id)
            .then(alinea => {
                const message = `L' alinea ${req.params.id} a été trouvée`
                res.json({ message, data: alinea })
            })
    })
}