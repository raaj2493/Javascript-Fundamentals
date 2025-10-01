const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// GET /books - Get all books
router.get('/', bookController.getAllBooks);

// GET /books/:id - Get book by ID
router.get('/:id', bookController.getBookById);

// POST /books - Create a new book
router.post('/', bookController.createBook);

// PUT /books/:id - Update a book
router.put('/:id', bookController.updateBook);

// DELETE /books/:id - Delete a book
router.delete('/:id', bookController.deleteBook);

module.exports = router;