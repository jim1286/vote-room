import { UserController } from "@/controller";
import { authorize, upload, validate } from "@/middleware";
import { CreateUserRequest } from "@/dto";
import { Router } from "express";
import { ResponseHandler } from "./handler";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  validate(CreateUserRequest),
  ResponseHandler(UserController.createUser)
);

router.get("/me", authorize, ResponseHandler(UserController.getUser));

export default router;
