const sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("Test", {
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