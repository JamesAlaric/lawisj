const {Section} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.delete('/codepenal/section/:id', (req, res) => {
        Section.findByPk(req.params.id).then(section => {
            const SectionDeleted = section;
            Section.destroy({
                where : {id_section : section.id_section}
            })
            .then(_ => {
                const message = `La Section avec l'identifiant ${SectionDeleted.id_section} a bien été supprimé`
                res.json({message , data : SectionDeleted})
            })
        })
    })
}