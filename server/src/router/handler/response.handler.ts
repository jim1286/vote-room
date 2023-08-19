import { HttpResponse } from "@/dto";
import { instanceToPlain } from "class-transformer";
import { Request, Response, NextFunction, RequestHandler } from "express";

const responseHandler =
  (handler: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await handler(req, res, next);
      const response = new HttpResponse(instanceToPlain(result));

      return res.status(200).json(instanceToPlain(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

export default responseHandler;
