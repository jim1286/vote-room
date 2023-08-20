import {
  CreateVoteRequest,
  DeleteVoteRequest,
  CreateOptionRequest,
  DeleteOptionRequest,
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

  if (result.deletedCount === 0) {
    throw new Error("Delete Fail");
  }

  return result;
};

export const createOptionByTitle = async (params: CreateOptionRequest) => {
  const doc = await Vote.findOneAndUpdate(
    { title: params.voteTitle },
    {
      $push: {
        optionList: {
          title: params.optionTitle,
          number: 0,
          userId: params.userId,
          userList: [],
        },
      },
    }
  ).exec();

  return doc;
};

export const updateOptionByUserId = async (params: UpdateOptionRequest) => {
  const docVote = await Vote.findOne({ title: params.voteTitle }).exec();
  const docUser = await User.findOne({ userId: params.userId }).exec();
  const option = docVote.optionList.find(
    (option) => option.title === params.optionTitle
  );

  if (!option.userList.find((user) => user.userId === params.userId)) {
    docVote.totalNumber++;
    option.number++;
    option.userList.push({
      userId: docUser.userId,
      profileImagePath: docUser.profileImagePath,
    });

    return docVote;
  }

  docVote.totalNumber--;
  option.number--;
  option.userList = option.userList.filter(
    (user) => user.userId !== docUser.userId
  );

  return docVote;
};

export const deleteOptionByTitle = async (params: DeleteOptionRequest) => {
  const doc = await Vote.findOne({ title: params.voteTitle }).exec();
  const index = doc.optionList.findIndex(
    (option) => option.title === params.optionTitle
  );

  if (doc.optionList[index].userId !== params.userId) {
    throw new Error();
  }

  doc.optionList.splice(index, 1);
  return doc;
};

export const findAll = async () => {
  const docList = await Vote.find().exec();

  return docList;
};

export const findVoteByTitle = async (title: string) => {
  const doc = await Vote.findOne({ title: title }).exec();

  return doc;
};
