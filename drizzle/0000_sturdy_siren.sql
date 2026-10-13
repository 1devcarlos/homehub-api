CREATE TYPE "public"."family_role" AS ENUM('HUSBAND', 'WIFE', 'SON', 'DAUGHTER', 'OTHER');--> statement-breakpoint
CREATE TABLE "houses" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "houses_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"name" text NOT NULL,
	"created_by" integer NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"firstname" text NOT NULL,
	"lastname" text NOT NULL,
	"nickname" text,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"house_id" integer,
	"family_role" "family_role",
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "houses" ADD CONSTRAINT "houses_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_house_id_houses_id_fk" FOREIGN KEY ("house_id") REFERENCES "public"."houses"("id") ON DELETE set null ON UPDATE no action;