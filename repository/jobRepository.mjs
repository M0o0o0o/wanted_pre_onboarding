import errorMessages from "../errorMessages.mjs";
import Job from "../models/tables/Job.mjs";
import { NoExistJob } from "../userError.mjs";

class JobRepository {
  constructor() {}
  async addJob(job) {}
  async findJob(id) {}
  async changeJob(job, newJob) {}
  async deleteJob(id) {}
}

export class JobRepositoryV1 extends JobRepository {
  constructor() {
    super();
  }

  async addJob(job) {
    try {
      const createdJob = await Job.create(job);
      return createdJob;
    } catch (error) {
      throw new Error("다시 시도해 주세요.");
    }
  }

  async findJob(id) {
    try {
      const job = await Job.findOne({ where: { id } });
      if (job === null) {
        throw new NoExistJob("id", errorMessages.NOJOB);
      }
      return job;
    } catch (error) {
      if (error instanceof NoExistJob) {
        throw error;
      }
      throw new Error("다시 시도해 주세요.");
    }
  }

  async changeJob(job, newJob) {
    try {
      const columns = Object.keys(newJob);
      columns.forEach((column) => {
        if (column in job && newJob[column] !== undefined) {
          job[column] = newJob[column];
        }
      });
      job.save();
    } catch (error) {
      throw new Error("다시 시도해주세요.");
    }
  }

  async deleteJob(id) {
    try {
      console.log(id);
      await Job.destroy({ where: { id } });
    } catch (error) {
      console.log(error);
      throw new Error("다시 시도해주세요.");
    }
  }
}
