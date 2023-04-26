import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes'

const app = express();

app.use(express.json());

// Healthcheck
// app.get('/', (req: Request, res: Response) => {
//   res.status(200).json({ message: "Aplicação de pé!" })
// });

app.use('/users', userRoutes);

export default app;