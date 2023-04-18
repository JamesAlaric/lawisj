const {Section} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.put('/codepenal/section/:id', (req, res) => {
        const id = req.params.id
        Section.update(req.body, {
            where : {id_section: id}
        })
            .then(_ => {
                Section.findByPk(id).then(section => {
                const message = `la Section ${req.body.id_section} a bien été mis à jour`
                res.json({message , data : section})
            })
        })
    })
}