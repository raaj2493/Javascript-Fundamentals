class Book {
    constructor() {
        // In a real application, this would connect to a database
        this.books = [
            {
                id: 1,
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald"
            },
            {
                id: 2,
                title: "To Kill a Mockingbird",
                author: "Harper Lee"
            },
            {
                id: 3,
                title: "Pride and Prejudice",
                author: "Jane Austen"
            }
        ];
    }

    // Get all books
    getAllBooks() {
        return this.books;
    }

    // Get book by ID
    getBookById(id) {
        return this.books.find(book => book.id == id);
    }

    // Add a new book
    addBook(title, author) {
        const newBook = {
            id: this.books.length + 1,
            title,
            author
        };
        this.books.push(newBook);
        return newBook;
    }

    // Update a book
    updateBook(id, updates) {
        const bookIndex = this.books.findIndex(book => book.id == id);
        if (bookIndex === -1) {
            return null;
        }
        this.books[bookIndex] = { ...this.books[bookIndex], ...updates };
        return this.books[bookIndex];
    }

    // Delete a book
    deleteBook(id) {
        const bookIndex = this.books.findIndex(book => book.id == id);
        if (bookIndex === -1) {
            return null;
        }
        const deletedBook = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return deletedBook;
    }
}

// Export a singleton instance
module.exports = new Book();