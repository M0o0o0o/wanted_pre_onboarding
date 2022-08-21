export default (job) => {
  const dto = {};
  if (job.duty !== undefined) dto.duty = job.duty;
  if (job.overview !== undefined) dto.overview = job.overview;
  if (job.preferr !== undefined) dto.preferr = job.preferr;
  if (job.grant !== undefined) dto.grant = job.grant;
  return dto;
};
