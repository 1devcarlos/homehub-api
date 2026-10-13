import { type AnyPgColumn, integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { houses } from "./houses";

export const familyRoleEnum = pgEnum("family_role", [
  "HUSBAND",
  "WIFE",
  "SON",
  "DAUGHTER",
  "OTHER",
]);

export const users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  firstName: text("firstname").notNull(),
  lastName: text("lastname").notNull(),
  nickName: text("nickname"),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  houseId: integer("house_id").references((): AnyPgColumn => houses.id, {
    onDelete: "set null",
  }),
  familyRole: familyRoleEnum("family_role"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
