import { DataTypes, Model } from 'sequelize';
import db from '../config/database.js';

export class Player extends Model {}

Player.init({
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
}, {
    sequelize: db,
    modelName: 'Player',
    tableName: 'players',
});
