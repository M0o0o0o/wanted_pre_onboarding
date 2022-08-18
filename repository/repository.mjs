import { JobRepositoryV1 } from "./jobRepository.mjs";
import { CompanyRepositoryV1 } from "./companyRepository.mjs";

const jobRepository = new JobRepositoryV1();
const companyRepository = new CompanyRepositoryV1();
export { jobRepository, companyRepository };
