const {Article} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/article', (req, res) => {
        Article.findAll()
            .then(article => {
                const message = 'La liste des articles a bien été récupéré.'
                res.json({ message, data: article })
            })
    })
}