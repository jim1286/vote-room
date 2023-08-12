import mongoose from "mongoose";
import dotenv from "dotenv";
import { MONGO_URI } from "@/config";

dotenv.config();

if (!MONGO_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGO_URI"');
}

export const connectToDB = async () => {
  await mongoose.connect(
    MONGO_URI ?? "mongodb://admin:1234@127.0.0.1:27017/test" // fallback url is localhost
  );

  console.log(`======= Mongoose Connected ======`);
  console.log(`=================================`);
};
