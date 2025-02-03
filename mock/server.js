import { createMiddleware } from '@mswjs/http-middleware';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

import { handlers } from './handlers.js';

const port = URL.parse(process.env.NEXT_PUBLIC_API_MOCK_URL).port || 9090;

const app = express();

app.use(cors());
app.use(express.json());
app.use(createMiddleware(...handlers));

app.listen(port, () => {
  console.log(`Mock server listens on ${process.env.NEXT_PUBLIC_API_MOCK_URL}`);
});
