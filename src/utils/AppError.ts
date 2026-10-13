export class AppError extends Error {
  constructor(
    public readonly status: number,
    message: string,
    public readonly error: unknown = null,
  ) {
    super(message);
    this.name = "AppError";
  }
}
