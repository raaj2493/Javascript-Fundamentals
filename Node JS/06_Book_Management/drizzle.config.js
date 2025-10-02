require("dotenv/config");
const { defineConfig } = require("drizzle-kit");

const config = defineConfig({
    out: "./drizzle",
    schema: "./Models/index.js",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL
    }
});

module.exports = config
