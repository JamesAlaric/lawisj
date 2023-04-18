const {Livre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.delete('/codepenal/livre/:id', (req, res) => {
        Livre.findByPk(req.params.id).then(livre => {
            const LivreDeleted = livre;
            Livre.destroy({
                where : {id_livre : livre.id_livre}
            })
            .then(_ => {
                const message = `Le livre avec l'identifiant ${LivreDeleted.id_livre} a bien été supprimé`
                res.json({message , data : LivreDeleted})
            })
        })
    })
}