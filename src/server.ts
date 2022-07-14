import express from 'express';
import routes from './api/routes';
import NodeCache from 'node-cache';

// Cache set tio Expire in 2 Hours
const cache = new NodeCache({ stdTTL: 7200 });
const app = express();
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

app.use('/api/images', routes);

app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`);
});

export default {
  app,
  cache,
};
