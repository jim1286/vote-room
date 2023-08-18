import { Id } from "@/interface";
import { UserRepository } from "@/repository";
import { JwtUtil } from "@/util";
import { JwtPayload } from "jsonwebtoken";

export const createTokens = (id: Id) => {
  const payload: JwtPayload = { id };
  const token = JwtUtil.generateJwtTokens(payload);

  return token;
};

export const refreshToken = () => {
  return;
};

export const signIn = async (id: Id) => {
  const user = await UserRepository.findById(id);
  const token = createTokens(user._id.toString());

  return token;
};
