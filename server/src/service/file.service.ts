import { STATIC_RESOURCE_DIR } from "@/config";
import { Id } from "@/interface";
import fs from "fs";
import path from "path";

export const move = (oldPath: string, newPath: string) => {
  const move = fs.renameSync(oldPath, newPath);
  return move;
};

export const createFolder = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

export const createImage = async (
  id: Id,
  file: Express.Multer.File
): Promise<string> => {
  if (!file) {
    return null;
  }

  const resourceDir = `${path.resolve("./")}${STATIC_RESOURCE_DIR}`;
  const userDir = `${resourceDir}/${id}`;
  const oldPath = `${resourceDir}/${file.filename}`;
  const newPath = `${userDir}/${file.filename}`;

  createFolder(userDir);
  move(oldPath, newPath);

  return newPath;
};
