const {Article} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/article/:id', (req, res) => {
        Article.findByPk(req.params.id)
            .then(article => {
                const message = `L' Article ${req.params.id_article} a été trouvée`
                res.json({ message, data: article })
            })
    })
}