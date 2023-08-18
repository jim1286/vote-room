class BaseError extends Error {
  status: number;
  code: number;
  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.message = message || "Something went wrong";
    this.name = this.constructor.name;
    this.status = 500;
    this.code = 0;
  }
}

export default BaseError;
