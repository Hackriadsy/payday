import express, { Router } from 'express';
import { AccountController } from '../controllers/account.controller';

const router: Router = express.Router();

router.post('/create', AccountController.create);
router.get('/:id', AccountController.getById);
router.get('/', AccountController.getAll);
router.put('/:id', AccountController.update);
router.delete('/:id', AccountController.delete);

export default router;