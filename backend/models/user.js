
import { sequelize } from '../config/database.js';

import { DataTypes } from 'sequelize';

const User = sequelize.define('User', {
 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

export default User;

