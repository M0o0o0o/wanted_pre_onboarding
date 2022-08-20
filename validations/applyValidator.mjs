import { body } from "express-validator";
import validator from "./validator.mjs";
import errCodes from "../errorMessages.mjs";

function postApplyValidator() {
  return [
    body("user")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    body("job")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

export { postApplyValidator };
