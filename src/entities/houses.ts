import { type AnyPgColumn, integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

import { users } from "./users";

export const houses = pgTable("houses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  createdBy: integer("created_by")
    .notNull()
    .references((): AnyPgColumn => users.id),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type House = typeof houses.$inferSelect;
export type NewHouse = typeof houses.$inferInsert;
