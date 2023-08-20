import { CreateUserRequest, UpdateUserRequest } from "@/dto";
import { UserPayload } from "@/interface";
import { UserRepository } from "@/repository";
import { FileService, UserService } from "@/service";
import { Request, RequestHandler, Response } from "express";

export const createUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: CreateUserRequest = req.body;
  const user = await UserService.createUser(params);
  const file = req.file as Express.Multer.File;

  user.profileImagePath = await FileService.createImage(user.id, file);

  await user.save();

  return user;
};

export const updateUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const params: UpdateUserRequest = req.body;
  const user = await UserService.updateUser(params);
  const file = req.file as Express.Multer.File;

  if (file) {
    user.profileImagePath = await FileService.createImage(user.id, file);
  }

  await user.save();

  return "Update User";
};

export const getUser: RequestHandler = async (req: Request, res: Response) => {
  const payload: UserPayload = res.locals.payload;
  const user = await UserRepository.findById(payload.id);

  return user;
};

export const deleteUser: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const payload: UserPayload = res.locals.payload;
  const user = await UserRepository.findById(payload.id);

  await UserService.deleteUser(user.userId);

  return "Delete User";
};
