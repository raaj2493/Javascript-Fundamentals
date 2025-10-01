const express = require("express");
const app = express();

app.get("/", (req , res) => {
    res.end("Home page");
})

app.get("/about", (req , res) => {
    res.end("About page");
})

app.get("/contact", (req , res) => {
    res.end("Contact raj.ash2493@gmail.com");
})

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})