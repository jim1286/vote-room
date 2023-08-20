import {
  CreateOptionRequest,
  CreateVoteRequest,
  DeleteVoteRequest,
  UpdateOptionRequest,
} from "@/dto";
import { UserRepository } from "@/repository";
import { VoteService } from "@/service";
import { Request, RequestHandler, Response } from "express";

export const createVote: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: CreateVoteRequest = req.body;
  const vote = await VoteService.createVote(params);
  const user = await UserRepository.findByUserId(params.userId);

  vote.totalNumber = 0;
  vote.profileImagePath = user.profileImagePath;

  await vote.save();

  return "Create Vote";
};

export const deleteVote: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: DeleteVoteRequest = req.body;
  const result = await VoteService.deleteVote(params);

  if (result.deletedCount === 0) {
    throw new Error("Delete Fail");
  }

  return "Delete Vote";
};

export const createOption: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: CreateOptionRequest = req.body;
  const vote = await VoteService.createOption(params);

  await vote.save();

  return "Create Option";
};

export const updateOption: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: UpdateOptionRequest = req.body;
  const vote = await VoteService.updateOption(params);

  await vote.save();

  return "Update Option";
};

export const getVoteList: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const voteList = await VoteService.getVoteList();

  return voteList;
};
