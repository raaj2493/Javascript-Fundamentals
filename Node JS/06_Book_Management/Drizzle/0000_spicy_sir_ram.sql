CREATE TABLE "books" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"authorid" uuid NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "authors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" text
);
