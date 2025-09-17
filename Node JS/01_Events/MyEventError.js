const { error } = require("console");
const Eventemitter = require("events");
const eventemitter = new Eventemitter();

eventemitter.on("error", (error) => (
    console.log(`error occured ${error.message}`)
) )

eventemitter.emit("error", new Error("Something went wrong"));