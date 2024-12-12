import 'dotenv/config';
import express, { Express } from 'express';
import setup from './application/middlewares';
import { logger } from './core';

import accountRouter from './application/routes/account.route';
import subscriptionRouter from './application/routes/subscription.route';

const app: Express = express();
const port = process.env.PORT || 3000;

// Setup middlewares
setup(app);

app.use(express.json())

app.use("/account", accountRouter)
app.use("/subscription", subscriptionRouter)

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
