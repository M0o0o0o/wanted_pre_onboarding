export default (job) => {
  return {
    company_id: job.company,
    duty: job.duty,
    overview: job.overview,
    preferr: job.preferr,
    grant: job.grant,
  };
};
