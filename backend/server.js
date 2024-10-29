import express from 'express';
import { connectDB } from './config/database.js';
import playerRoutes from './routes/playerRoutes.js';

const app = express();
app.use(express.json());

app.use('/api/players', playerRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
};

startServer();
