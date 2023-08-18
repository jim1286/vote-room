import { ApiResponse, SignInRequest, SignInResponse } from "@/interface";
import { ApiService } from ".";

const AUTH_BASE_URI = `/auth`;

export const signIn = async (
  params: SignInRequest
): Promise<SignInResponse> => {
  const response: ApiResponse = await ApiService.post(
    `${AUTH_BASE_URI}`,
    params
  );

  return response.data.data;
};
