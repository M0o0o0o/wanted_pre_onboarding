import errorMessages from "../errorMessages.mjs";
import Apply from "../models/tables/Apply.mjs";

class ApplyRepository {
  constructor() {}
  async addJob(user_id, job_id) {}
}

export class ApplyRepositoryV1 extends ApplyRepository {
  constructor() {
    super();
  }

  async addJob(user_id, job_id) {
    try {
      const newApply = await Apply.create({
        user_id,
        job_id,
      });
      return newApply;
    } catch (error) {
      if (error.name === "SequelizeForeignKeyConstraintError") {
        throw new Error(errorMessages.CHECKAPPLYINPUT);
      } else if (error.name === "SequelizeUniqueConstraintError") {
        throw new Error(errorMessages.EXISTAPPLY);
      }
      throw new Error("다시 시도해 주세요.");
    }
  }
}
