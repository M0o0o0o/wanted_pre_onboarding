export default (field, message) => {
  return {
    errors: [
      {
        field,
        message,
      },
    ],
  };
};
