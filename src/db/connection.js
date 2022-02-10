require("dotenv").config();
const { Sequelize } = require("sequelize");

let sequalize = new Sequelize(process.env.MYSQL_URI);

// aSync await
let runSequalize = async () => {
    try {
        await sequalize.authenticate();
    } catch (error) {
        console.log(error);
    }
};

runSequalize();

module.exports = sequalize;