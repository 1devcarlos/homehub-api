import type { Response } from "express";

export class AppResponse<T> {
  constructor(
    private readonly status: number,
    private readonly message: string,
    private readonly body: T,
  ) {}

  send(res: Response): void {
    res.status(this.status).json({ message: this.message, body: this.body });
  }
}
