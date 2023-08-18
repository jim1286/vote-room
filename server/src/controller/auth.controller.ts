import { UserPayload } from "@/interface";
import { AuthService } from "@/service";
import { RequestHandler } from "express";

export const signIn: RequestHandler = async (req, res) => {
  const params: UserPayload = res.locals.payload;

  const token = await AuthService.signIn(params.id);

  return token;
};
