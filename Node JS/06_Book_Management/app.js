const { error } = require('console');
const express = require('express');
const {books} = require("./Database/db")
const bookRoutes = require("./Routes/bookstore.routes")


const app = express();
const Port = 8000;

app.listen(Port,() => console.log(`Server is running successfully on Port ${Port}`))


app.use("/books" , bookRoutes);










