export default (queries) => {
  const dto = { company: {}, job: {} };
  dto.page = queries.page !== undefined ? parseInt(queries.page) : 1;
  dto.cnt = queries.cnt !== undefined ? parseInt(queries.cnt) : 10;
  dto.company.name =
    queries.company !== undefined ? "%" + queries.company + "%" : "%%";
  dto.job.duty = queries.duty !== undefined ? "%" + queries.duty + "%" : "%%";
  dto.company.nation =
    queries.nation !== undefined ? "%" + queries.nation + "%" : "%%";
  dto.company.region =
    queries.region !== undefined ? "%" + queries.region + "%" : "%%";
  dto.job.preferr =
    queries.preferr !== undefined ? "%" + queries.preferr + "%" : "%%";
  return dto;
};
