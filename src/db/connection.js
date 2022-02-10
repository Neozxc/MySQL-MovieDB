require("dotenv").config();
const { Sequelize } = require("sequelize");

let sequalize = new Sequelize(process.env.MYSQL_URI);

// sequalize.authenticate().then(() => {
//     console.log("Connected to the Database");
// }).catch((error) => {
//     console.log(error);
// });


// aSync await
let runSequalize = async () => {
    try {
        await sequalize.authenticate();
    } catch (error) {
        console.log(error);
    }
};

runSequalize();

// module.exports = sequalize;