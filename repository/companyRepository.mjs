import errorMessages from "../errorMessages.mjs";
import Company from "../models/tables/Company.mjs";
import { NoExistCompany } from "../userError.mjs";

class CompanyRepository {
  constructor() {}
  async findCompany(id) {}
}

export class CompanyRepositoryV1 extends CompanyRepository {
  constructor() {
    super();
  }

  async findCompany(id) {
    try {
      const company = await Company.findOne({
        where: {
          id,
        },
      });

      if (company === null) {
        throw new NoExistCompany("company", errorMessages.NOCOMPANY);
      }
      return company;
    } catch (e) {
      if (e instanceof NoExistCompany) {
        throw e;
      }
      throw new Error(errorMessages.GENENAL);
    }
  }
}
