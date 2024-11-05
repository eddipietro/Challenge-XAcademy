import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import playerRoutes from './routes/playerRoutes.js';
import { sequelize } from './models/index.js';
import loadCSV from './routes/loadCSV.js'; 
import loadSQL from './routes/loadSQL.js'; 
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/players', playerRoutes);

// Ruta para cargar datos CSV y SQL
app.post('/api/load-data', async (req, res) => {
    try {
        await loadCSV('./data/female_players.csv'); 
        await loadSQL('./data/fifa_female_players.sql'); 
        console.log('Data loaded successfully.');
        res.status(200).json({ message: 'Data loaded successfully.' });
    } catch (error) {
        console.error('Error loading data:', error);
        res.status(500).json({ error: 'Error loading data.' });
    }
});

// Connect to the database
sequelize.sync().then(() => {
    console.log('Database synced');
}).catch(err => console.error('Database connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
