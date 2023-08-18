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
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    const ext = path.extname(file.originalname);
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;

    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
