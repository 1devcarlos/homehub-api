import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";

import { AuthController } from "@/controllers/AuthController";
import { errorHandler } from "@/middleware/errorHandler";
import { UserRepository } from "@/repositories/UserRepository";
import { authRoutes } from "@/routes/auth.routes";
import { UserService } from "@/services/UserService";

export function createApp(): Express {
  const app = express();

  app.use(helmet());
  app.use(cors({ credentials: true }));
  app.use(express.json());
  app.use(cookieParser());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  const userRepository = new UserRepository();
  const userService = new UserService(userRepository);
  const authController = new AuthController(userService);

  app.use("/auth", authRoutes(authController));

  app.use(errorHandler);

  return app;
}
