export default (errors) => {
  console.log(errors);
  const result = { errors: [] };
  errors.array().forEach((error) => {
    result.errors.push({
      field: error.param,
      message: error.msg,
    });
  });
  return result;
};
