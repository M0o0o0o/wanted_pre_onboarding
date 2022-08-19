export default (field, message) => {
  const result = { error: {} };
  if (field !== "") {
    result.error.field = field;
  }
  if (message !== undefined) {
    result.error.message = message;
  }
  return result;
};
