import { config } from "dotenv";

if (process.env.NODE_ENV !== undefined) {
  config({ path: `.env.${process.env.NODE_ENV}` });
} else {
  config({ path: `.env.${process.env.NODE_ENV || "local"}` });
}

export const { NODE_ENV, PORT, MONGO_URI, SECRET_KEY } = process.env;
