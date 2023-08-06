import { HttpResponse } from "@/dto";
import { instanceToPlain } from "class-transformer";
import { Request, Response, NextFunction } from "express";

const responseHandler =
  (asyncFn: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await asyncFn(req, res, next);

      const response = new HttpResponse(instanceToPlain(result));
      return res.status(200).json(instanceToPlain(response));
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

export default responseHandler;
