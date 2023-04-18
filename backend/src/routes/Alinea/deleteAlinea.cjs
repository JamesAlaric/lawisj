const {Alinea} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.delete('/codepenal/alinea/:id', (req, res) => {
        Alinea.findByPk(req.params.id).then(alinea => {
            const alineaDeleted = alinea;
            Alinea.destroy({
                where : {id_alinea : alinea.id_alinea}
            })
            .then(_ => {
                const message = `L'alinéa avec l'identifiant ${alineaDeleted.id_alinea} a bien été supprimé`
                res.json({message , data : alineaDeleted})
            })
        })
    })
}