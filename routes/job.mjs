import express from "express";
import {
  enrollJobValidator,
  changeJobValidator,
  deleteJobValidator,
} from "../validations/jobValidator.mjs";
import jobDto from "../dto/jobDto.mjs";
import { NoExistCompany, NoExistJob } from "../userError.mjs";
import { jobRepository, companyRepository } from "../repository/repository.mjs";
import errorDto from "../dto/errorDto.mjs";
import jobDtoWithoutCompany from "../dto/jobDtoWithoutCompany.mjs";
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
    return res.status(400).json(errorDto("", e.message));
  }
});

router.patch("/:id", changeJobValidator(), async (req, res, next) => {
  try {
    const job = await jobRepository.findJob(req.params.id);
    await jobRepository.changeJob(job, jobDtoWithoutCompany(req.body));
    res.status(200).json(jobDtoWithoutCompany(job));
  } catch (e) {
    if (e instanceof NoExistJob) {
      return res.status(400).json(errorDto(e.name, e.message));
    }
    return res.status(400).json(errorDto("", e.message));
  }
});

router.delete("/:id", deleteJobValidator(), async (req, res, next) => {
  try {
    const job = await jobRepository.findJob(req.params.id);
    await jobRepository.deleteJob(job.id);
    return res.status(200).end();
  } catch (e) {
    if (e instanceof NoExistJob) {
      return res.status(400).json(errorDto(e.name, e.message));
    }
    return res.status(400).json(errorDto("", e.message));
  }
});

export default router;
