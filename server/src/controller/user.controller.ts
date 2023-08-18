import { CreateUserRequest, UserResponse } from "@/dto";
import { UserPayload } from "@/interface";
import { UserRepository } from "@/repository";
import { FileService, UserService } from "@/service";
import { CTUtil } from "@/util";
import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req, res) => {
  const params: CreateUserRequest = req.body;
  const user = await UserService.createUser(params);
  const file = req.file as Express.Multer.File;

  user.profileImagePath = await FileService.createImage(user.id, file);

  await user.save();

  const response = CTUtil.toCls(UserResponse, user);

  return response;
};

export const getUser: RequestHandler = async (req, res) => {
  const payload: UserPayload = res.locals.payload;
  const user = await UserRepository.findById(payload.id);
  const response = CTUtil.toCls(UserResponse, user);

  return response;
};
