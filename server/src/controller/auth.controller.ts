import { UserPayload } from "@/interface";
import { AuthService } from "@/service";
import { Request, RequestHandler, Response } from "express";

export const signIn: RequestHandler = async (req: Request, res: Response) => {
  const params: UserPayload = res.locals.payload;

  const token = await AuthService.signIn(params.id);

  return token;
};
