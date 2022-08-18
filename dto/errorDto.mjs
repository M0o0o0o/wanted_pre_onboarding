export default (field, message) => {
  const result = {};
  if (field !== "") {
    result.field = field;
  }
  if (message !== undefined) {
    result.message = message;
  }
  return result;
};
