import { User } from "@/db";

export const isExist = async (userId: string) => {
  const isExist = await User.exists({ userId: userId });

  if (isExist) {
    return true;
  }

  return false;
};
