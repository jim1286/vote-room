import BaseError from "./base.error";

export class EntityNotFoundError extends BaseError {
  constructor(entityName?: string) {
    super(`${entityName} Not Found Error`);
    this.status = 404;
    this.code = 1001;
  }
}

export class EntityCreateError extends BaseError {
  constructor(entityName?: string) {
    super(`${entityName} Create Error`);
    this.status = 400;
    this.code = 1002;
  }
}

export class EntityUpdateError extends BaseError {
  constructor(entityName?: string) {
    super(`${entityName} Update Error`);
    this.status = 400;
    this.code = 1003;
  }
}

export class EntityDeleteError extends BaseError {
  constructor(entityName?: string) {
    super(`${entityName} Delete Error`);
    this.status = 400;
    this.code = 1004;
  }
}
