import { sql } from 'drizzle-orm'; 
import { uuid, pgTable, varchar , text } from "drizzle-orm/pg-core";
export const usersTable = pgTable("users", {
   id: uuid('id').primaryKey().default(sql`gen_random_uuid()`),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: text({ length: 255 }).notNull(),
  salt: text({ length: 255 }).notNull(),
});