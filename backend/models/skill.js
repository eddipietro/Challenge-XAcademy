import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Skill = sequelize.define('Skill', {
  name: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.INTEGER },
}, {
  timestamps: false,
});
