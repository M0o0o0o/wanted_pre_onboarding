import { JobRepositoryV1 } from "./jobRepository.mjs";
import { CompanyRepositoryV1 } from "./companyRepository.mjs";
import { ApplyRepositoryV1 } from "./applyRepository.mjs";

const jobRepository = new JobRepositoryV1();
const companyRepository = new CompanyRepositoryV1();
const applyRepository = new ApplyRepositoryV1();
export { jobRepository, companyRepository, applyRepository };
