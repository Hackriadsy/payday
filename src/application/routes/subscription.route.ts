
import { createSubscriptionValidation, subscriptionIdValidation } from "@/domains/subscription/subscriptionValidation";
import { Router } from "express";
import { SubscriptionController } from "../controllers/subscription.controller";
import { validateRequest } from "../middlewares/error-handler";

const subscriptionRouter = Router();

subscriptionRouter.post("/", validateRequest(createSubscriptionValidation), SubscriptionController.create);
subscriptionRouter.get("/:id",validateRequest(subscriptionIdValidation), SubscriptionController.getById);
subscriptionRouter.put("/:id", validateRequest(subscriptionIdValidation), SubscriptionController.update);

export default subscriptionRouter;
