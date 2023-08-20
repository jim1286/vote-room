import {
  CreateOptionRequest,
  CreateVoteRequest,
  CreateVoteResponse,
  DeleteVoteRequest,
  GetVoteListResponse,
  UpdateOptionRequest,
} from "@/interface";
import { ApiService } from ".";

const VOTE_BASE_URI = `/vote`;

export const createVote = async (
  params: CreateVoteRequest
): Promise<CreateVoteResponse> => {
  const response = await ApiService.post(`${VOTE_BASE_URI}`, params);

  return response.data;
};

export const deleteVote = async (params: DeleteVoteRequest) => {
  const response = await ApiService.post(`${VOTE_BASE_URI}/delete`, params);

  return response.data;
};

export const createOption = async (params: CreateOptionRequest) => {
  const response = await ApiService.post(`${VOTE_BASE_URI}/option`, params);

  return response.data;
};

export const updateOption = async (params: UpdateOptionRequest) => {
  const response = await ApiService.put(
    `${VOTE_BASE_URI}/option/update`,
    params
  );

  return response.data;
};

export const getVoteList = async (): Promise<GetVoteListResponse[]> => {
  const response = await ApiService.get(`${VOTE_BASE_URI}`);

  return response.data.data;
};
