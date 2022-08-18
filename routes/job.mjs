import express from "express";
import { enrollJobValidator } from "../validations/jobValidator.mjs";
import jobDto from "../dto/jobDto.mjs";
import { NoExistCompany } from "../userError.mjs";
import { jobRepository, companyRepository } from "../repository/repository.mjs";
import errorDto from "../dto/errorDto.mjs";
const router = express.Router();

router.post("/", enrollJobValidator(), async (req, res, next) => {
  try {
    const company = await companyRepository.findCompany(req.body.company);
    const newJob = await jobRepository.addJob(jobDto(req.body));
    res.location(`localhost:${req.app.get("port")}/job/${newJob.id}`);
    return res.status(201).end();
  } catch (e) {
    if (e instanceof NoExistCompany) {
      return res.status(400).json(errorDto(e.name, e.message));
    }
  }
});

export default router;
