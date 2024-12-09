import { createAccountValidation } from "@/domains/account/accountValidation";
import { Router } from "express";
import { AccountController } from "../controllers/account.controller";
//import { Router } from "express";
//import { AccountController } from "../controllers/account.controller";
import express from 'express';
import { validateRequest } from "../middlewares/error-handler";


const accountRouter = Router();

accountRouter.post("/", validateRequest(createAccountValidation), AccountController.create);
accountRouter.get("/:id", AccountController.getById);
accountRouter.get("/", AccountController.getAll);
accountRouter.put("/:id", AccountController.update);
accountRouter.delete("/:id", AccountController.delete);

export default accountRouter;

const router: Router = express.Router();

router.post('/create', AccountController.create);
router.get('/:id', AccountController.getById);
router.get('/', AccountController.getAll);
router.put('/:id', AccountController.update);
router.delete('/:id', AccountController.delete);

export default router;