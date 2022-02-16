const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, updateDB, deleteDB } = require("./Movies/movieMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async () => {
    // Add
    if (argv.add) {
        const filmObj = {
            name: argv.name,
            actor: argv.actor
        }
        await addFilm(filmObj);
    } else if (argv.list) {
        // List
        await list();
    } else if (argv.update) {
        // Update
        await updateDB();
    } else if (argv.delete) {
        // Delete
        await deleteDB();
    } else {

    }
};

app();