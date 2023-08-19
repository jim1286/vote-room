import { UserController } from "@/controller";
import { authorize, upload, validate } from "@/middleware";
import { CreateUserRequest, UpdateUserRequest } from "@/dto";
import { Router } from "express";
import { ResponseHandler } from "./handler";

const router = Router();

router.post(
  "/",
  upload.single("image"),
  validate(CreateUserRequest),
  ResponseHandler(UserController.createUser)
);

router.put(
  "/update",
  upload.single("image"),
  authorize,
  validate(UpdateUserRequest),
  ResponseHandler(UserController.updateUser)
);

router.delete("/delete", authorize, ResponseHandler(UserController.deleteUser));

router.get("/me", authorize, ResponseHandler(UserController.getUser));

export default router;
