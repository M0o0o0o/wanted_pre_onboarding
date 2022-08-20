import express from "express";
import { postApplyValidator } from "../validations/applyValidator.mjs";
import errorDto from "../dto/errorDto.mjs";
import { applyRepository } from "../repository/repository.mjs";
const router = express.Router();

router.post("/", postApplyValidator(), async (req, res, next) => {
  try {
    const apply = await applyRepository.addJob(req.body.user, req.body.job);
    res.location(`/apply/${apply.id}`);
    return res.status(201).end();
  } catch (e) {
    return res.status(400).json(errorDto("", e.message));
  }
});

export default router;
