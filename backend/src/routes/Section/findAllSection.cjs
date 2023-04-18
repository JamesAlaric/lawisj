const {Section} = require('../../db/sequelize.cjs')

module.exports = (app) => {
    app.get('/codepenal/section', (req, res) => {
        Section.findAll()
            .then(sections => {
                const message = 'La liste des Sections a bien été récupéré.'
                res.json({ message, data: sections })
            })
    })
}