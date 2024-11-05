import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});


try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
} catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
}

export { sequelize };
