import { ApiResponse, GetUserResponse, SignInRequest, SignInResponse } from '@/interface';
import { ApiService } from '.';

const AUTH_BASE_URI = `/auth`;

export const signIn = async (params: SignInRequest): Promise<SignInResponse> => {
  const response: ApiResponse = await ApiService.post(`${AUTH_BASE_URI}/login`, params);

  return response.data.data;
};

export const getUser = async (): Promise<GetUserResponse> => {
  const response: ApiResponse = await ApiService.get(`${AUTH_BASE_URI}/me`);

  return response.data.data;
};
