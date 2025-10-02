const { pgTable , text , uuid , varchar} = require("drizzle-orm/pg-core");

const books = pgTable("books" , {
    id: uuid("id").primaryKey(),
    title: varchar("title" , {length: 255}).notNull(),
    authorid: uuid("authorid").notNull(),
    description: text("description")
});

module.exports = {books};