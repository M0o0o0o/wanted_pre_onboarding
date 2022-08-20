import errorMessages from "../errorMessages.mjs";
import Company from "../models/tables/Company.mjs";
import Job from "../models/tables/Job.mjs";
import { NoExistJob } from "../userError.mjs";
import { Op } from "sequelize";

class JobRepository {
  constructor() {}
  async getJob(id) {}
  async addJob(job) {}
  async findJob(id) {}
  async changeJob(job, newJob) {}
  async deleteJob(id) {}
  async getCompanyOtherJobs(company_id, job_id) {}
  async getJobs(data) {}
}

export class JobRepositoryV1 extends JobRepository {
  constructor() {
    super();
  }
  async getJob(id) {
    try {
      const job = await Job.findOne({
        where: { id },
        include: [
          {
            model: Company,
            required: true,
          },
        ],
      });
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

  async getJobs(data) {
    try {
      const jobs = await Job.findAndCountAll({
        include: [
          {
            model: Company,
            required: true,
            where: {
              name: { [Op.like]: data.company.name },
              nation: { [Op.like]: data.company.nation },
              region: { [Op.like]: data.company.region },
            },
          },
        ],
        where: {
          duty: { [Op.like]: data.job.duty },
          preferr: { [Op.like]: data.job.preferr },
        },
        order: [["createdAt", "DESC"]],
        limit: data.cnt,
        offset: (data.page - 1) * data.cnt,
      });
      return jobs;
    } catch (error) {
      throw new Error("다시 시도해 주세요.");
    }
  }

  async getCompanyOtherJobs(company_id, job_id) {
    try {
      const jobs = await Job.findAll({
        attributes: ["id"],
        where: {
          company_id,
          id: {
            [Op.not]: job_id,
          },
        },
        order: [["createdAt", "DESC"]],
        limit: 10,
      });
      return jobs;
    } catch (e) {
      throw new Error("다시 시도해 주세요.");
    }
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
      await Job.destroy({ where: { id } });
    } catch (error) {
      throw new Error("다시 시도해주세요.");
    }
  }
}
