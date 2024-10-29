import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import Player from './models/player.js'; // Ajusta la ruta según sea necesario
import { Skill } from './skill.js';

export const PlayerSkill = sequelize.define('PlayerSkill', {
  playerId: {
    type: DataTypes.INTEGER,
    references: { model: Player, key: 'id' },
  },
  skillId: {
    type: DataTypes.INTEGER,
    references: { model: Skill, key: 'id' },
  },
}, {
  timestamps: false,
});

Player.belongsToMany(Skill, { through: PlayerSkill });
Skill.belongsToMany(Player, { through: PlayerSkill });
