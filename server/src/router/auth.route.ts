import { AuthController } from "@/controller";
import { Router } from "express";

const router = Router();

router.post("/login", AuthController.signIn);

export default router;
