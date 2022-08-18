import { body } from "express-validator";
import validator from "./validator.mjs";
import errCodes from "../errorMessages.mjs";

function enrollJobValidator() {
  return [
    body("company")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    body("duty")
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    body("overview")
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isLength({ min: 1, max: 300 })
      .withMessage(errCodes.INPUTERROR),
    body("preferr")
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    body("grant")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .bail()
      .withMessage(errCodes.INPUTERROR)
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

export { enrollJobValidator };
