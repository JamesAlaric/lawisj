const { Sequelize, DataTypes } = require('sequelize')
const AlineaModel = require('./Models/Code Penal/Alinea.cjs')
const ArticleModel = require('./Models/Code Penal/article.cjs')
const ChapitreModel = require('./Models/Code Penal/chapitre.cjs')
const LivreModel = require('./Models/Code Penal/Livre.cjs')
const QuestionModel = require('./Models/Code Penal/question.cjs')
const ReponseModel = require('./Models/Code Penal/reponse.cjs')
const SectionModel = require('./Models/Code Penal/section.cjs')
const TitreModel = require('./Models/Code Penal/titre.cjs')
const dbConfig = require("../db/db.config.cjs")


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// sequelize.authenticate()
//   .then(_ => console.log("La connexion à la base de données a réussi"))
//   .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

  //Creation des tables
  const Titre = TitreModel(sequelize , DataTypes)
  const Article = ArticleModel(sequelize, DataTypes)
  const Chapitre = ChapitreModel(sequelize, DataTypes)
  const Livre = LivreModel(sequelize, DataTypes)
  const Alinea = AlineaModel(sequelize, DataTypes)
  const Section = SectionModel(sequelize, DataTypes)

  //Creation des associations


const initDb = () => {
  return sequelize.sync({ alter: true }).then(_ => {
    console.log("La base de données a été initialisé")
  })
  .catch((err) =>{
    console.log("Erreur de connexion: "+ err.message);
  })
}

module.exports = {
 initDb, Titre , Article , Chapitre , Livre , Alinea , Section
}

