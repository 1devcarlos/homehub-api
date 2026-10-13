import { drizzle } from "drizzle-orm/node-postgres";

import { Pool } from "pg";

import { env } from "./env";

import * as schema from "@/entities";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  connectionTimeoutMillis: 5000,
});

pool.on("error", (err) => {
  console.error("unexpected pg pool error", err);
});

export const db = drizzle({ client: pool, schema: schema });
