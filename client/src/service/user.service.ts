import {
  SignUpRequest,
  SignUpResponse,
  ApiResponse,
  GetUserResponse,
  UpdateUserInfo,
} from "@/interface";
import { ApiService } from ".";

const USER_BASE_URI = `/user`;

export const signUp = async (
  params: SignUpRequest
): Promise<SignUpResponse> => {
  const formData = new FormData();

  formData.append("name", params.name);
  formData.append("userId", params.userId);
  formData.append("password", params.password);

  if (params.image) {
    formData.append("image", params.image);
  }

  const response: ApiResponse = await ApiService.post(USER_BASE_URI, formData, {
    "Content-Type": "multipart/form-data; charset=utf-8",
  });

  return response.data;
};

export const getUser = async (): Promise<GetUserResponse> => {
  const response: ApiResponse = await ApiService.get(`${USER_BASE_URI}/me`);

  return response.data.data;
};

export const deleteUser = async () => {
  const response: ApiResponse = await ApiService.deleteMethod(
    `${USER_BASE_URI}/delete`
  );

  return response.data;
};

export const updateUser = async (params: UpdateUserInfo) => {
  const formData = new FormData();

  formData.append("originUserId", params.originUserId);
  formData.append("name", params.name);
  formData.append("userId", params.userId);
  formData.append("password", params.password);

  if (params.image) {
    formData.append("image", params.image);
  }

  const response: ApiResponse = await ApiService.put(
    `${USER_BASE_URI}/update`,
    formData,
    {
      "Content-Type": "multipart/form-data; charset=utf-8",
    }
  );

  return response.data;
};
