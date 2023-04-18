const {Article} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.post('/codepenal/article', (req, res) => {
        Article.create(req.body)
            .then(article => {
                const message = `le article ${req.body.libelle} a bien été crée`
                res.json({message , data : article})
            })
    })
}