import { JwtTokens, User } from "@/interface";

export type SignInResponse = JwtTokens;

export type SignUpResponse = {
  userId: string;
  name: string;
};

export type GetUserResponse = User;
