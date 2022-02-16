const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
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
        if (argv.newname) {
            await Film.update({ name: argv.newname }, { where: { id: 2 } });
        } else if (argv.newactor) {
            await Film.update({ actor: argv.newactor }, { where: { id: 2 } });
        }
    } catch (error) {
        console.log(error);
    }
};

// Delete
exports.deleteDB = async () => {
    try {
        if (argv.name) {
            const deleteMovies = await Film.destroy({ where: { name: argv.name } });  
            console.log(deleteMovies);
        }
    } catch (error) {
        console.log(error);
    }
};