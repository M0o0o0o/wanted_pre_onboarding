import { validationResult } from "express-validator";
import errorsDto from "../dto/errorsDto.mjs";

export default (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json(errorsDto(errors));
};
