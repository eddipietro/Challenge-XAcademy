import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js'; // Asegúrate de que la ruta sea correcta

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;
