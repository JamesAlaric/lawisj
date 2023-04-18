const {Section} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/section/:id', (req, res) => {
        Section.findByPk(req.params.id)
            .then(section => {
                const message = `La Section ${req.params.id} a été trouvée`
                res.json({ message, data: section })
            })
    })
}