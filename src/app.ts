import express from 'express';
const app = express();
import cors from 'cors';
import { studentRoute } from './app/modules/students/student.route';

app.use(cors());
app.use(express.json());

app.use('/api/v1/students/', studentRoute.router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
