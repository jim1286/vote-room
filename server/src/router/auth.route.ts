import { AuthController } from "@/controller";
import { authenticateLocal } from "@/middleware";
import { Router } from "express";
import { ResponseHandler } from "@/handler";

const router = Router();

router.post("/", authenticateLocal, ResponseHandler(AuthController.signIn));

export default router;
