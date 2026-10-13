import { Router } from "express";

import type { AuthController } from "@/controllers/AuthController";

export const authRoutes = (controller: AuthController): Router => {
  const router = Router();

  router.post("/register", (req, res) => controller.register(req, res));

  return router;
};
