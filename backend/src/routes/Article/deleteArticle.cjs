const {Article} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.delete('/codepenal/article/:id', (req, res) => {
        Article.findByPk(req.params.id).then(article => {
            const ArticleDeleted = article;
            Article.destroy({
                where : {id_article : article.id_article}
            })
            .then(_ => {
                const message = `L' article avec l'identifiant ${ArticleDeleted.id_article} a bien été supprimé`
                res.json({message , data : ArticleDeleted})
            })
        })
    })
}