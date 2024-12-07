import express, { Router } from 'express';

const router: Router = express.Router();

import accountRoute from '@/application/routes/account.route';

router.use('/user', accountRoute)

export default router;
