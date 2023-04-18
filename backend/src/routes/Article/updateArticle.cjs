const {Article} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/article/:id', (req, res) => {
        const id = req.params.id
        Article.update(req.body, {
            where : {id_article: id}
        })
            .then(_ => {
                Article.findByPk(id).then(article => {
                const message = `le Article ${req.body.id_article} a bien été mis à jour`
                res.json({message , data : article})
            })
        })
    })
}