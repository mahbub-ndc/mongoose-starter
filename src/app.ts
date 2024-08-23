import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

app.use(cors());
app.use(express.json());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
