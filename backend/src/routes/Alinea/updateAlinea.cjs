const {Alinea} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/alinea/:id', (req, res) => {
        const id = req.params.id
        Alinea.update(req.body, {
            where : {id_alinea: id}
        })
            .then(_ => {
                Alinea.findByPk(id).then(alinea => {
                const message = `le Alinea ${req.body.id_alinea} a bien été mis à jour`
                res.json({message , data : alinea})
            })
        })
    })
}