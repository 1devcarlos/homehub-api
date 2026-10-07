import { env } from "@/config/env";
import { createApp } from "./app";

const app = createApp();
const port = env.PORT;

const server = app.listen(port, () => {
  console.log(`api running on http://localhost:${port}`);
});

const shutdown = (signal: string): void => {
  console.log(`${signal} received, shutting down`);
  server.close(() => process.exit(0));
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
