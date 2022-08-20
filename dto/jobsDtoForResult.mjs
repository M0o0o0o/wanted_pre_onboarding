export default (jobs) => {
  try {
    const dto = { count: jobs.count, jobs: [] };
    for (const job of jobs.rows) {
      dto.jobs.push({
        id: job.id,
        회사명: job.Company.name,
        국가: job.Company.nation,
        지역: job.Company.region,
        채용포지션: job.duty,
        채용보상금: job.grant,
        사용기술: job.preferr,
      });
    }
    return dto;
  } catch (error) {
    console.error(error);
  }
};
