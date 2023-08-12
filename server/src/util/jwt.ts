import { SECRET_KEY } from "@/config";
import { JwtTokens } from "@/interface";
import { JwtPayload, sign } from "jsonwebtoken";

export const generateJwtTokens = (userId: JwtPayload): JwtTokens => {
  const accessToken = sign(userId, SECRET_KEY!, {
    expiresIn: "1y",
  });

  const refreshToken = sign(userId, SECRET_KEY!, {
    expiresIn: "1y",
  });

  return {
    accessToken,
    refreshToken,
  };
};
