const express = require('express');
const configureMiddleware = require('./src/config/middleware');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 8000;

// Configure middleware
configureMiddleware(app);

// Routes
app.use('/books', bookRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Books API',
        version: '1.0.0',
        endpoints: {
            'GET /books': 'Get all books',
            'GET /books/:id': 'Get book by ID',
            'POST /books': 'Create a new book',
            'PUT /books/:id': 'Update a book',
            'DELETE /books/:id': 'Delete a book'
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/`);
});

module.exports = app;