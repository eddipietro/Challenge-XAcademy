import Skill from './skill.js';
import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const PlayerSkill = sequelize.define('PlayerSkill', {
    playerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Players',
            key: 'id'
        }
    },
    skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Skills',
            key: 'id'
        }
    },
    value: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

export default PlayerSkill;
