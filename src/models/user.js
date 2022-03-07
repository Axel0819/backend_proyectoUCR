import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const user = connection.define('user', {
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{timestamps: false});

export default user;