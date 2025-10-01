const express = require('express');

// Middleware configuration function
const configureMiddleware = (app) => {
    // Parse JSON bodies
    app.use(express.json());
    
    // Parse URL-encoded bodies
    app.use(express.urlencoded({ extended: true }));
    
    // Add CORS headers (optional - for future API consumption)
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        
        if (req.method === 'OPTIONS') {
            res.sendStatus(200);
        } else {
            next();
        }
    });
    
    // Request logging middleware
    app.use((req, res, next) => {
        console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
        next();
    });
};

module.exports = configureMiddleware;