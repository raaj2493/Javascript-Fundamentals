const express = require("express");
const app = express();
const port = 8000;


const books = [
      { "id" : 1,
        "title" : "The Great Gatsby",
        "author" : "F. Scott Fitzgerald"}
        ,
        {
            "id" : 2,
            "title" : "To Kill a Mockingbird",
            "author" : "Harper Lee",
        }
        ,
        {
            "id" : 3,
            "title" : "Pride and Prejudice",
            "author" : "Jane Austen",
        }
]


// MIDDLEWARE
app.use(express.json());

app.get("/books", (req, res) => {
    res.json(books);
})

app.get("/books/:id", (req , res) => {
    const id = req.params.id;
    const book = books.find(e => e.id == id)

    if(!book){
        return res.status(404).send("Book not found");
    }
    res.json(book);
})


app.post("/books", (req , res) => {
    const {title , author} = req.body;

    if(!title || !author){
        return res.status(400).send("Title and author are required");
    }
    const book = {
        id : books.length + 1,
        title,
        author
    }
    books.push(book);
    res.json(books);
})

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
})