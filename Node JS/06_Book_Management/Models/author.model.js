const { pgTable , text , uuid , varchar} = require("drizzle-orm/pg-core");

const authors = pgTable("authors" , {
    id: uuid("id").primaryKey(),
    name: varchar("name" , {length: 255}).notNull(),
    email: text("email")
});

module.exports = {authors};