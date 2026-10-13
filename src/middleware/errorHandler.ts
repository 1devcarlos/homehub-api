import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

import { AppError } from "@/utils/AppError";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof ZodError) {
    res.status(422).json({ message: "Validation failed", error: err.issues });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.status).json({ message: err.message, error: err.error });
    return;
  }

  console.error(err);
  res.status(500).json({ message: "Internal server error", error: null });
};
