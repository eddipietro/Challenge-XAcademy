import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Player from './player.js';
import Skill from './skill.js';

const PlayerSkill = sequelize.define('PlayerSkill', {
    playerId: { type: DataTypes.INTEGER, references: { model: Player, key: 'id' } },
    skillId: { type: DataTypes.INTEGER, references: { model: Skill, key: 'id' } }
});

Player.belongsToMany(Skill, { through: PlayerSkill });
Skill.belongsToMany(Player, { through: PlayerSkill });

export default PlayerSkill;
