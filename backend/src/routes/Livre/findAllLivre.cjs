const {Livre} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/livre', (req, res) => {
        Livre.findAll()
            .then(livre => {
                const message = 'La liste des livres a bien été récupéré.'
                res.json({ message, data: livre })
            })
    })
}