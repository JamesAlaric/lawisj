const {Chapitre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.delete('/codepenal/chapitre/:id', (req, res) => {
        Chapitre.findByPk(req.params.id).then(chapitre => {
            const ChapitreDeleted = chapitre;
            Chapitre.destroy({
                where : {id_chapitre : chapitre.id_chapitre}
            })
            .then(_ => {
                const message = `Le Chapitre avec l'identifiant ${ChapitreDeleted.id_chapitre} a bien été supprimé`
                res.json({message , data : ChapitreDeleted})
            })
        })
    })
}