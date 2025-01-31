import { createServer } from '@mswjs/http-middleware';
import dotenv from 'dotenv';

dotenv.config();

import { handlers } from './handlers.js';

export const server = createServer(...handlers);

const port = URL.parse(process.env.NEXT_PUBLIC_API_MOCK_URL).port || 9090;

server.listen(port, () => {
  console.log(`Mock server listens on ${process.env.NEXT_PUBLIC_API_MOCK_URL}`);
});

