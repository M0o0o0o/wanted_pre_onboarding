import { body, param, query } from "express-validator";
import validator from "./validator.mjs";
import errCodes from "../errorMessages.mjs";

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

// notEmpty 가 필요 없다 없으면 기존 걸로 덮어씌운다.
function changeJobValidator() {
  return [
    param("id").trim().isInt().withMessage(errCodes.INPUTERROR),
    body("duty").isLength({ max: 30 }).withMessage(errCodes.INPUTERROR),
    body("overview")
      .isLength({ min: 0, max: 300 })
      .withMessage(errCodes.INPUTERROR),
    body("preferr").isLength({ max: 30 }).withMessage(errCodes.INPUTERROR),
    body("grant")
      .trim()
      .isInt()
      .bail()
      .withMessage(errCodes.INPUTERROR)
      .isLength({ max: 30 })
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
