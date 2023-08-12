import { UserRepository } from "@/repository";
import { JwtUtil } from "@/util";
import { RequestHandler } from "express";

export const signIn: RequestHandler = (req, res) => {
  const userId = req.body.userId;

  if (!UserRepository.isExist(userId)) {
    return;
  }

  const token = JwtUtil.generateJwtTokens(userId);

  res.json({
    accessToken: token.accessToken,
    refreshToken: token.refreshToken,
  });
};
