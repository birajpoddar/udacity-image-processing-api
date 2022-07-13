import express from 'express';
import routes from './api/routes';

const app = express();
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
