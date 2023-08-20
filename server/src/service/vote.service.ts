import {
  CreateVoteRequest,
  DeleteVoteRequest,
  CreateOptionRequest,
  DeleteOptionRequest,
  UpdateOptionRequest,
} from "@/dto";
import { VoteRepository } from "@/repository";

export const createVote = async (params: CreateVoteRequest) => {
  const vote = await VoteRepository.createVote(params);

  return vote;
};

export const deleteVote = async (params: DeleteVoteRequest) => {
  const result = await VoteRepository.deleteVoteByTitle(params);

  return result;
};

export const createOption = async (params: CreateOptionRequest) => {
  const vote = await VoteRepository.createOptionByTitle(params);

  return vote;
};

export const updateOption = async (params: UpdateOptionRequest) => {
  const vote = await VoteRepository.updateOptionByUserId(params);

  return vote;
};

export const deleteOption = async (params: DeleteOptionRequest) => {
  const vote = await VoteRepository.deleteOptionByTitle(params);

  return vote;
};

export const getVoteList = async () => {
  const voteList = await VoteRepository.findAll();

  return voteList;
};
