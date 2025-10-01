# Books API - MVC Architecture

A RESTful API for managing books, built with Express.js following the MVC (Model-View-Controller) architecture pattern.

## Project Structure

```
.
├── app.js                      # Main application file
├── package.json               # Project configuration
├── README.md                  # Documentation
├── books.js                   # Original file (kept for reference)
└── src/
    ├── config/
    │   └── middleware.js      # Middleware configuration
    ├── controllers/
    │   └── bookController.js  # Business logic handlers
    ├── models/
    │   └── Book.js           # Data model and operations
    └── routes/
        └── bookRoutes.js     # Route definitions

```

## MVC Architecture Benefits

- **Model**: Handles data operations and business logic
- **View**: JSON responses (in REST APIs)
- **Controller**: Processes requests and coordinates between Model and View
- **Separation of Concerns**: Each component has a specific responsibility
- **Maintainability**: Easier to modify and extend
- **Testability**: Components can be tested independently

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API documentation |
| GET | `/books` | Get all books |
| GET | `/books/:id` | Get book by ID |
| POST | `/books` | Create a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Installation & Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the application:
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

3. The server will start on http://localhost:8000

## Example Requests

### Get all books
```bash
curl http://localhost:8000/books
```

### Create a new book
```bash
curl -X POST http://localhost:8000/books \
  -H "Content-Type: application/json" \
  -d '{"title": "1984", "author": "George Orwell"}'
```

### Update a book
```bash
curl -X PUT http://localhost:8000/books/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "The Great Gatsby Updated", "author": "F. Scott Fitzgerald"}'
```

### Delete a book
```bash
curl -X DELETE http://localhost:8000/books/1
```

## Features

- ✅ MVC Architecture
- ✅ RESTful API design
- ✅ Error handling
- ✅ Request logging
- ✅ CORS support
- ✅ Input validation
- ✅ Proper HTTP status codes
- ✅ Modular code structure

## Migration from Original Code

The original `books.js` file has been refactored into:

1. **Model** (`src/models/Book.js`): Data management and business logic
2. **Controller** (`src/controllers/bookController.js`): Request handling logic
3. **Routes** (`src/routes/bookRoutes.js`): Endpoint definitions
4. **Config** (`src/config/middleware.js`): Middleware configuration
5. **Main App** (`app.js`): Application bootstrap and configuration

This structure makes the code more maintainable, testable, and scalable.