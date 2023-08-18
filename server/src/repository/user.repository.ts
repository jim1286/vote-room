import { User } from "@/models";
import { CreateUserRequest } from "@/dto";
import { Id } from "@/interface";

export const create = async (params: CreateUserRequest) => {
  const doc = await User.create(params);

  return doc;
};

export const findById = async (id: Id) => {
  const doc = await User.findById(id).exec();

  return doc;
};

export const findByUserId = async (userId: string) => {
  const doc = await User.findOne({ userId }).exec();

  return doc;
};
