import { VoteController } from "@/controller";
import {
  CreateOptionRequest,
  CreateVoteRequest,
  DeleteVoteRequest,
  UpdateOptionRequest,
} from "@/dto";
import { authorize, validate } from "@/middleware";
import { Router } from "express";
import { ResponseHandler } from "@/handler";

const router = Router();

router.post(
  "/",
  authorize,
  validate(CreateVoteRequest),
  ResponseHandler(VoteController.createVote)
);

router.get("/", authorize, ResponseHandler(VoteController.getVoteList));

router.post(
  "/option",
  authorize,
  validate(CreateOptionRequest),
  ResponseHandler(VoteController.createOption)
);

router.put(
  "/option/update",
  authorize,
  validate(UpdateOptionRequest),
  ResponseHandler(VoteController.updateOption)
);

router.put(
  "/option/delete",
  authorize,
  validate(DeleteVoteRequest),
  ResponseHandler(VoteController.deleteOption)
);

router.post(
  "/delete",
  validate(DeleteVoteRequest),
  authorize,
  ResponseHandler(VoteController.deleteVote)
);

export default router;
