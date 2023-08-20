import express from "express";
import authRouter from "./auth.route";
import userRouter from "./user.route";
import voteRouter from "./vote.route";

const router = express.Router();

router.use("/healthcheck", (req, res) => {
  return res.status(200).json({ message: "OK" });
});
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/vote", voteRouter);

export default router;
