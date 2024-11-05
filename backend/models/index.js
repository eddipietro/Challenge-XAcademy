import { Sequelize } from 'sequelize';
import Player from './player.js';
import User from './user.js';
// Importa otros modelos según sea necesario

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
} catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
}

// Sincronizar modelos con la base de datos
const models = {
    Player,
    User,
    // Agrega otros modelos aquí
};

// Exportar la instancia de Sequelize y los modelos
export { sequelize, models };
