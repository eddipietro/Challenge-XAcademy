import { DataTypes } from 'sequelize';
import { sequelize } from './index.js'; 

const Skill = sequelize.define('Skill', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },

});

export default Skill;
