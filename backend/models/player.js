import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Player = sequelize.define('Player', {
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: false },
  club: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER }, // Esta línea debe estar presente
  nationality: { type: DataTypes.STRING },
}, {
  timestamps: true,
});
