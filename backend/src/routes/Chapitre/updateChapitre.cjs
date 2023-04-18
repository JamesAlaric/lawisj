const {Chapitre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/chapitre/:id', (req, res) => {
        const id = req.params.id
        Chapitre.update(req.body, {
            where : {id_chapitre: id}
        })
            .then(_ => {
                Chapitre.findByPk(id).then(chapitre => {
                const message = `le Chapitre ${req.body.id_chapitre} a bien été mis à jour`
                res.json({message , data : chapitre})
            })
        })
    })
}