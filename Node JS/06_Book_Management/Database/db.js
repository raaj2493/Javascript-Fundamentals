// 🟢 Initial Array of Books
exports.books = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "1984", author: "George Orwell" }
];


const { drizzle } = require("drizzle-orm/node-postgres");
const { Pool } = require("pg");
const schema = require("../Drizzle/Schemas");

// Create a connection pool
const pool = new Pool({
    connectionString: "postgres://postgres:postgres@localhost:5432/mydb"
});

// Initialize Drizzle with schema
const db = drizzle(pool, { schema });

module.exports = db;
