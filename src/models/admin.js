import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const admin = connection.define('admin', {
    idAdmin: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    adminStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    }
});

useBcrypt(admin, { fields: ['password'] });
// user.authenticate()

export default admin;