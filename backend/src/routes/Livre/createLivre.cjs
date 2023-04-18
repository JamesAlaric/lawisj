const {Livre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/livre', (req, res) => {
        Livre.create(req.body)
            .then(livre => {
                const message = `le livre ${req.body.libelle} a bien été crée`
                res.json({message , data : livre})
            })
    })
}