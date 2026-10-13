import { defineConfig } from "drizzle-kit";

try {
  process.loadEnvFile(`.env.${process.env.NODE_ENV ?? "development"}`);
} catch {}

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/entities/*.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
