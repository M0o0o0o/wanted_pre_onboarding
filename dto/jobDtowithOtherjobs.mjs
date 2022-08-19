export default (job, otherjobsId) => {
  const otherJobsOfCompany = `${job.Company.name}의 다른 채용공고`;
  return {
    id: job.id,
    회사명: job.Company.name,
    국가: job.Company.nation,
    지역: job.Company.region,
    채용포지션: job.duty,
    채용보상금: job.grant,
    사용기술: job.preferr,
    채용내용: job.overview,
    다른채용공고: otherjobsId,
  };
};
