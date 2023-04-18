const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/sequelize.cjs');

var corsOptions= {
  origin: "http://localhost:3001"
}
// Connexion a la base de données
sequelize.initDb();

// Middleware de traitements
app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(cors(corsOptions))
  .use(express.urlencoded({ extended: true }))




// simple route
app.get("/", (req, res) => {
  res.redirect('/api/v1/')});
  
app.get("/api/v1/", (req, res) => {
  res.json({ message: "Welcome to Law for ISJ API - Backend!!!" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// listes des routes
require('./src/routes/Section/findAllSection.cjs')(app)
require('./src/routes/Section/findSectionByPK.cjs')(app)
require('./src/routes/Section/createSection.cjs')(app)
require('./src/routes/Section/updateSection.cjs')(app)
require('./src/routes/Section/deleteSection.cjs')(app)
require('./src/routes/Chapitre/createChapitre.cjs')(app)
require('./src/routes/Chapitre/findAllChapitre.cjs')(app)
require('./src/routes/Chapitre/deleteChapitre.cjs')(app)
require('./src/routes/Chapitre/updateChapitre.cjs')(app)
require('./src/routes/Chapitre/findChapitreByPK.cjs')(app)
require('./src/routes/Alinea/createAlinea.cjs')(app)
require('./src/routes/Alinea/deleteAlinea.cjs')(app)
require('./src/routes/Alinea/findAllAlinea.cjs')(app)
require('./src/routes/Alinea/updateAlinea.cjs')(app)
require('./src/routes/Alinea/findAlineaByPK.cjs')(app)
require('./src/routes/Article/findArticleByPK.cjs')(app)
require('./src/routes/Article/findAllArticle.cjs')(app)
require('./src/routes/Article/updateArticle.cjs')(app)
require('./src/routes/Article/deleteArticle.cjs')(app)
require('./src/routes/Article/createArticle.cjs')(app)
require('./src/routes/Livre/findLivreByPK.cjs')(app)
require('./src/routes/Livre/findAllLivre.cjs')(app)
require('./src/routes/Livre/updateLivre.cjs')(app)
require('./src/routes/Livre/deleteLivre.cjs')(app)
require('./src/routes/Livre/createLivre.cjs')(app)
require('./src/routes/Titre/findTitreByPK.cjs')(app)
require('./src/routes/Titre/findAllTitre.cjs')(app)
require('./src/routes/Titre/updateTitre.cjs')(app)
require('./src/routes/Titre/deleteTitre.cjs')(app)
require('./src/routes/Titre/createTitre.cjs')(app)
