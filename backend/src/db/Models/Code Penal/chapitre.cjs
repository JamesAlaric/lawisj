module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Chapitre', {
        id_chapitre: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        libelle: {
            type: DataTypes.STRING,
            allowNull: false
        },

        titre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
        , {
            timestamps: false,
            freezeTableName: true
        })
}
