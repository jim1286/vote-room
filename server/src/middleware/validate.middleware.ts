import { plainToClass } from "class-transformer";
import { validateOrReject } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validate(schema: { new (): any }) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const target = plainToClass(schema, req.body);

    try {
      await validateOrReject(target);
      next();
    } catch (error) {
      next(error);
    }
  };
}
