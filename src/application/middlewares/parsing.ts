import express, { Express } from 'express';

export default function setup(app: Express) {
  // JSON parsing middleware
  app.use(
    express.json({
      limit: '10mb', // Limit payload size
      strict: true, // Only accept arrays and objects
    }),
  );

  // URL-encoded body parsing
  app.use(
    express.urlencoded({
      extended: true,
      limit: '10mb',
    }),
  );
}
