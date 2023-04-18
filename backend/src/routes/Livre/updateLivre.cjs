const {Livre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/livre/:id', (req, res) => {
        const id = req.params.id
        Livre.update(req.body, {
            where : {id_livre: id}
        })
            .then(_ => {
                Livre.findByPk(id).then(livre => {
                const message = `le Livre ${req.body.id_livre} a bien été mis à jour`
                res.json({message , data : livre})
            })
        })
    })
}