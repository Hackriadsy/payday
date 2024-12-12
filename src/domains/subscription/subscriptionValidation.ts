import { body, param } from "express-validator";

export const createSubscriptionValidation = [
    body("accountId").isUUID().withMessage("Invalid account ID format"),
    body("plan")
      .isString()
      .isIn(["PayFree", "PayFresh", "PayCrech", "PaySilver", "PayClever", "PayRiver"])
      .withMessage("Invalid subscription plan"),
    body("startDate").isISO8601().withMessage("Start date must be a valid ISO 8601 date"),
    body("endDate")
    .optional()
    .isISO8601()
    .withMessage("End date must be a valid ISO 8601 date if provided")
  ];
  
  export const subscriptionIdValidation = [
    param("id").isUUID().withMessage("Invalid subscription ID format")
  ];