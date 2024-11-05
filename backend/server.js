import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import { sequelize } from './models/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/players', playerRoutes);

// Connect to the database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => console.error('Database connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
