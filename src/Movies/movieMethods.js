const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
    try {
        // Create an database
        await Film.sync()
        // Create an entry not a database
        await Film.create(filmObj)
    } catch (error) {
        console.log(error);
    }
};