import express from 'express';
import routes from './api/routes';
import NodeCache from 'node-cache';
import { ImageExpress } from 'types/modules/express';
import middlewares from './api/middlewares';
import caches from './api/caches';

// Cache set to Expire in 2 Hours & default checkPeriod of 10 Minutes
const cache = new NodeCache({ stdTTL: 7200 });
const app: ImageExpress.Application = express();
const port = process.env.PORT != undefined ? parseInt(process.env.PORT) : 3000;

// Reset cache after expiry if image exists in server
cache.on('expired', caches.setCacheAgain);

// Logs any path visited on the app
app.use(middlewares.logPathVisited).use('/', routes);

// Listens for incoming request on port
app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`);
});

export default {
  app,
  cache,
};
