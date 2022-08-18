import Job from "../models/tables/Job.mjs";

class JobRepository {
  constructor() {}
  async addJob(job) {}
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
}
