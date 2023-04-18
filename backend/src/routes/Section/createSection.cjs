const {Section} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/section', (req, res) => {
        Section.create(req.body)
            .then(section => {
                const message = `la Section ${req.body.libelle} a bien été crée`
                res.json({message , data : section})
            })
    })
}