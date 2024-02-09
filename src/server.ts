import express from 'express';
import { config } from 'dotenv';
import { MongoClient } from './database/mongo';
import { router } from './routes/routes';

const main = async () => {
  config();
  const app = express();
  app.use(express.json());
  app.use(router);

  await MongoClient.connect();

  app.listen(8000);
};

main();
