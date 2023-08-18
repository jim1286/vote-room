import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    index: true,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
  profileImagePath: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model("User", UserSchema);
