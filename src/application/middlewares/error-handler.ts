import { logger } from '@/core';
import { Express, NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

// Validation Error Middleware
export const validateRequest = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ errors: errors.array() });
  };
};

export default function setup(app: Express) {
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    // Log the error
    logger.error(err.stack);

    // Send appropriate error response
    res.status(500).json({
      message: 'An unexpected error occurred',
      error: process.env.NODE_ENV === 'development' ? err.message : {},
    });
  });

  // 404 Handler
  app.use((req: Request, res: Response) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  // Unhandled Promise Rejection Handler
  process.on('unhandledRejection', (reason, promise) => {
    logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  });

  // Uncaught Exception Handler
  process.on('uncaughtException', (error) => {
    logger.error('Uncaught Exception:', error);
    process.exit(1);
  });
}