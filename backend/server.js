// backend/server.js
import express from 'express';
import sequelize from './config/database.js'; // Importación correcta
import playerRoutes from './routes/playerRoutes.js'; // Asegúrate de tener las rutas

const app = express();

app.use(express.json()); // Para poder leer JSON en las peticiones
app.use('/api', playerRoutes); // Prefijo para las rutas

const startServer = async () => {
    try {
        await sequelize.authenticate(); // Conexión a la base de datos
        console.log('Conectado a la base de datos');
        app.listen(3000, () => {
            console.log('Servidor corriendo en http://localhost:3000');
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
};

startServer();
