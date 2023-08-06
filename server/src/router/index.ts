import express from "express";

const router = express.Router();

router.use("/healthcheck", (req, res) => {
  return res.status(200).json({ message: "OK" });
});

export default router;
