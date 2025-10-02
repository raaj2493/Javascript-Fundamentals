const { drizzle } = require("drizzle-orm/node-postgres")

const db = drizzle(process.env.DATABASE_URL);

module.exports = db