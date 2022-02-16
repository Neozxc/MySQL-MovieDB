const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("MovieDBs", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    actor: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Film;