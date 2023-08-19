import { STATIC_RESOURCE_DIR } from "@/config";
import { existsSync, mkdirSync } from "fs";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = `.${STATIC_RESOURCE_DIR}`;

    if (!existsSync(dir)) {
      mkdirSync(dir);
    }

    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const fileName = new Date().valueOf() + path.extname(file.originalname);

    cb(null, fileName);
  },
});

export const upload = multer({ storage: storage });
