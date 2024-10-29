import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const FifaVersion = sequelize.define('FifaVersion', {
    year: { type: DataTypes.INTEGER, allowNull: false, unique: true }
}, {
    tableName: 'fifa_versions',
    timestamps: false,
});

export default FifaVersion;
