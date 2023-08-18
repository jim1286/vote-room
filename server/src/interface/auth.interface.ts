import { Id } from "./common.interface";

export interface JwtTokens {
  accessToken: string;
  refreshToken: string;
}

export type UserPayload = {
  id: Id;
};
