import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js'; 

const Player = sequelize.define('Player', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Player; 
