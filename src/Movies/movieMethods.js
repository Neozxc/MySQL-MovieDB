const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs");
const argv = yargs(hideBin(process.argv)).argv;


// Create
exports.addFilm = async (filmObj) => {
    try {
        // Checks if exist and creates it
        await Film.sync();
        // Create an entry not a database
        await Film.create(filmObj);
    } catch (error) {
        console.log(error);
    }
};

// List
exports.list = async () => {
    try {
        const listOfMovies = await Film.findAll();
        console.log(listOfMovies);
    } catch (error) {
        console.log(error);
    }
};

// Update
exports.updateDB = async () => {
    try {
        const updateMovies = await Film.update({ name: "Spiderman" });
        console.log(updateMovies);
    } catch (error) {
        console.log(error);
    }
};

// Delete
exports.deleteDB = async () => {
    try {
        const deleteMovies = await Film.destroy();
        console.log(deleteMovies);
    } catch (error) {
        console.log(error);
    }
};