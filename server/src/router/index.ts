import express from "express";
import authRouter from "./auth.route";

const router = express.Router();

router.use("/healthcheck", (req, res) => {
  return res.status(200).json({ message: "OK" });
});
router.use("/auth", authRouter);

export default router;
