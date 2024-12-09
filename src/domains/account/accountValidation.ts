import { body } from "express-validator";

export const createAccountValidation = [
  body("googleId").isString().withMessage("Google ID must be a string"),
  body("name").isString().withMessage("Name is required"),
  body("phone").isString().withMessage("Phone number is required"),
  body("type")
    .optional()
    .isString()
    .isIn(["individual", "business"])
    .withMessage("Type must be 'individual' or 'business'"),
  body("country")
    .optional()
    .isString()
    .isLength({ min: 2, max: 2 })
    .withMessage("Country must be a valid ISO 3166-1 alpha-2 code"),
  body("avatar")
    .optional()
    .isString()
    .withMessage("Avatar must be a valid string URL"),
];
