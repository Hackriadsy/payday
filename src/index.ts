import 'dotenv/config';
import express, { Express } from 'express';
import setup from './application/middlewares';
import { logger } from './core';

const app: Express = express();
const port = process.env.PORT || 3000;

// Setup middlewares
setup(app);

app.listen(port, () => {
  logger.info(`Server is running at http://localhost:${port}`);
});
