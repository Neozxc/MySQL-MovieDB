const sequalize = require("sequelize");
const { DataTypes } = require("sequelize");

const Film = sequalize.define("Netflix", {
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