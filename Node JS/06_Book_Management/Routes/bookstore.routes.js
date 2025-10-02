const express = require("express")
const router = express.Router();



router.get("/" , (req , res)=> {
    res.json(books)
} );

router.get("/:id" , (res,req) => {
    const id = req.params.id;
    const books = books.find((e) => e.id == id);

    if(!books){
       return res.status(400).json({error : `Books with id ${id} does not exist `})
    }
     res.json(books);
})

router.post("/", (res , req) => {
  const {title , author} = req.body;

  if(!title || title === ""){
    return res.status(400).json("Please enter a valid title");
  }

  if(!author || author === ""){
    return res.status(400).json("Please enter a valid author");
  }

  const id = books.length + 1;

  const book = {id , title , author}

  books.push(book);

  res.status(201).json({message : "Book Created Successfully"})




  router.delete("/:id" , (req , res ), () => {
    const id = req.params.id;
    if(isNaN(id)){
        return res.status(400).json({error : "Please enter a valid ID"})
    }
    const indextodelete = books.find(e => e.id == id);
  })


  if(indextodelete < 0){
     return res.status(400).json({error : `Books with id ${id} does not exist `})
  }

  books.slice(indextodelete, 1)
  return res.status(200).json({message : "Book Deleted Successfully"})

});

module.exports = router;