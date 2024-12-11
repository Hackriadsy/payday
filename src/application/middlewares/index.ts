import router from '@/application/routes';
import compression from 'compression';
import { Express } from 'express';
import passport from 'passport';
import setupErrorHandling from './error-handler';
import setupLogging from './logging';
import setupParsing from './parsing';
import setupSecurity from './security';

export default function setup(app: Express) {
  setupSecurity(app);
  app.use(compression());
  setupLogging(app);
  setupParsing(app);
  setupErrorHandling(app);

  app.use('/api/v1', router);

  // passport setup
  app.use(passport.initialize());
  app.use(passport.session());
}
