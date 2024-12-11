import { createAccountValidation } from "@/domains/account/accountValidation";
import { Router } from "express";
import { AccountController } from "../controllers/account.controller";
import { validateRequest } from "../middlewares/error-handler";


const accountRouter = Router();

accountRouter.post("/", validateRequest(createAccountValidation), AccountController.create);
accountRouter.get("/:id", AccountController.getById);
accountRouter.get("/", AccountController.getAll);
accountRouter.put("/:id", AccountController.update);
accountRouter.delete("/:id", AccountController.delete);

export default accountRouter;