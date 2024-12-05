import { Express } from 'express';
import expressWinston from 'express-winston';
import morgan from 'morgan';
import winston from 'winston';

export default function setup(app: Express) {
  // Morgan for HTTP request logging
  app.use(morgan('combined'));

  // Winston for advanced logging
  app.use(
    expressWinston.logger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs/requests.log' }),
      ],
      format: winston.format.combine(winston.format.colorize(), winston.format.json()),
      meta: true,
      expressFormat: true,
      colorize: false,
    }),
  );
}
