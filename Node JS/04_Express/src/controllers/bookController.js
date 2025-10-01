const Book = require('../models/Book');

class BookController {
    // Get all books
    getAllBooks(req, res) {
        try {
            const books = Book.getAllBooks();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Get book by ID
    getBookById(req, res) {
        try {
            const { id } = req.params;
            const book = Book.getBookById(id);
            
            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.json(book);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Create a new book
    createBook(req, res) {
        try {
            const { title, author } = req.body;
            
            // Validation
            if (!title || !author) {
                return res.status(400).json({ 
                    error: 'Title and author are required' 
                });
            }
            
            const newBook = Book.addBook(title, author);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Update a book
    updateBook(req, res) {
        try {
            const { id } = req.params;
            const updates = req.body;
            
            const updatedBook = Book.updateBook(id, updates);
            
            if (!updatedBook) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.json(updatedBook);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Delete a book
    deleteBook(req, res) {
        try {
            const { id } = req.params;
            const deletedBook = Book.deleteBook(id);
            
            if (!deletedBook) {
                return res.status(404).json({ error: 'Book not found' });
            }
            
            res.json({ 
                message: 'Book deleted successfully', 
                book: deletedBook 
            });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new BookController();