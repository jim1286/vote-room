import { CreateUserRequest, UpdateUserRequest } from "@/dto";
import { Id } from "@/interface";
import { UserRepository } from "@/repository";
import bcrypt from "bcrypt";

export const createUser = async (params: CreateUserRequest) => {
  const hashed = await bcrypt.hash(params.password, 10);

  params.password = hashed;

  const doc = await UserRepository.create(params);
  const user = await UserRepository.findById(doc._id);

  return user;
};

export const updateUser = async (params: UpdateUserRequest) => {
  const user = await UserRepository.update(params);

  return user;
};

export const deleteUser = async (userId: string) => {
  await UserRepository.deleteUserByUserId(userId);
};
