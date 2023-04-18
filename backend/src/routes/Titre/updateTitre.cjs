const {Titre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/titre/:id', (req, res) => {
        const id = req.params.id
        Titre.update(req.body, {
            where : {id_titre: id}
        })
            .then(_ => {
                Titre.findByPk(id).then(titre => {
                const message = `le Titre ${req.body.id_titre} a bien été mis à jour`
                res.json({message , data : titre})
            })
        })
    })
}