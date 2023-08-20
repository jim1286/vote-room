import { Schema, model } from "mongoose";

const VoteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    profileImagePath: {
      type: String,
      require: true,
    },
    totalNumber: {
      type: Number,
      require: true,
    },
    optionList: [
      {
        userId: String,
        title: String,
        number: Number,
        userList: [
          {
            userId: String,
            profileImagePath: String,
          },
        ],
      },
    ],
    isAnonymous: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    versionKey: false,
  }
);

export const Vote = model("Vote", VoteSchema);
