import {
  CreateOptionRequest,
  CreateVoteRequest,
  DeleteVoteRequest,
  UpdateOptionRequest,
} from "@/dto";
import { User, Vote } from "@/models";

export const createVote = async (params: CreateVoteRequest) => {
  const doc = await Vote.create(params);

  return doc;
};

export const deleteVoteByTitle = async (params: DeleteVoteRequest) => {
  const result = await Vote.deleteOne({
    userId: params.userId,
    title: params.voteTitle,
  });

  return result;
};

export const createOptionByTitle = async (params: CreateOptionRequest) => {
  const doc = await Vote.findOneAndUpdate(
    { title: params.voteTitle },
    {
      $push: {
        optionList: { title: params.optionTitle, number: 0, userList: [] },
      },
    }
  ).exec();

  return doc;
};

export const updateOptionByUserId = async (params: UpdateOptionRequest) => {
  const doc = await Vote.findOne({ title: params.voteTitle }).exec();
  const user = await User.findOne({ userId: params.userId }).exec();
  const option = doc.optionList.find(
    (option) => option.title === params.optionTitle
  );

  if (!option.userList.find((user) => user.userId === params.userId)) {
    doc.totalNumber++;
    option.number++;
    option.userList.push({
      userId: user.userId,
      profileImagePath: user.profileImagePath,
    });

    return doc;
  }

  doc.totalNumber--;
  option.number--;
  option.userList = option.userList.filter(
    (user) => user.userId !== user.userId
  );

  return doc;
};

export const findAll = async () => {
  const docList = await Vote.find({}).exec();

  return docList;
};

export const findVoteByTitle = async (title: string) => {
  const doc = await Vote.findOne({ title: title }).exec();

  return doc;
};
