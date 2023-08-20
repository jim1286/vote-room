import { User } from "@/models";
import { CreateUserRequest, UpdateUserRequest } from "@/dto";
import { Id } from "@/interface";
import bcrypt from "bcrypt";

export const create = async (params: CreateUserRequest) => {
  const doc = await User.create(params);

  return doc;
};

export const update = async (params: UpdateUserRequest) => {
  const doc = await User.findOne({ userId: params.originUserId }).exec();

  if (params.name && doc.name !== params.name) {
    doc.name = params.name;
  }

  if (params.userId && doc.userId !== params.userId) {
    doc.userId = params.userId;
  }

  if (params.password && !bcrypt.compareSync(params.password, doc.password)) {
    const hashed = bcrypt.hashSync(params.password, 10);
    doc.password = hashed;
  }

  return doc;
};

export const deleteUserByUserId = async (userId: string) => {
  const result = await User.deleteOne({ userId });

  if (result.deletedCount === 0) {
    throw new Error("Delete Fail");
  }

  return result;
};

export const findById = async (id: Id) => {
  const doc = await User.findById(id).exec();

  return doc;
};

export const findByUserId = async (userId: string) => {
  const doc = await User.findOne({ userId }).exec();

  return doc;
};
