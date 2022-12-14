import { body, param, query } from "express-validator";
import validator from "./validator.mjs";
import errCodes from "../errorMessages.mjs";
import errorMessages from "../errorMessages.mjs";

function getJobValidator() {
  return [
    param("id")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

function getJobsValidator() {
  return [
    query("company")
      .optional()
      .isLength({ min: 1, max: 50 })
      .withMessage(errCodes.INPUTERROR),
    query("duty")
      .optional()
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    query("preferr")
      .optional()
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    query("nation")
      .optional()
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    query("region")
      .optional()
      .isLength({ max: 30 })
      .withMessage(errCodes.INPUTERROR),
    query("page").optional().isInt().withMessage(errCodes.INPUTERROR),
    query("cnt")
      .optional()
      .isInt({ min: 10, max: 30 })
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

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

// notEmpty ??? ?????? ?????? ????????? ?????? ?????? ???????????????.
function changeJobValidator() {
  return [
    param("id")
      .notEmpty()
      .bail()
      .withMessage(errorMessages.REQUIRED)
      .trim()
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    body("duty")
      .optional()
      .isLength({ min: 1, max: 30 })
      .withMessage(errCodes.INPUTERROR),
    body("overview")
      .optional()
      .isLength({ min: 1, max: 300 })
      .withMessage(errCodes.INPUTERROR),
    body("preferr").isLength({ max: 30 }).withMessage(errCodes.INPUTERROR),
    body("grant")
      .optional()
      .trim()
      .isInt()
      .bail()
      .withMessage(errCodes.INPUTERROR)
      .isLength({ min: 1, max: 30 })
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

function deleteJobValidator() {
  return [
    param("id")
      .trim()
      .notEmpty()
      .bail()
      .withMessage(errCodes.REQUIRED)
      .isInt()
      .withMessage(errCodes.INPUTERROR),
    validator,
  ];
}

export {
  enrollJobValidator,
  changeJobValidator,
  deleteJobValidator,
  getJobValidator,
  getJobsValidator,
};
