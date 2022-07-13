import express from 'express';

const app = express();
const port: number =
  process.env.PORT != null ? parseInt(process.env.PORT) : 3000;

app.get('/', (req, res) => {
  res.send(`Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
