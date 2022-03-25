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
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    adminStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{
    freezeTableName: true,
    timestamps: false
});

useBcrypt(admin, { fields: ['password'] });
// user.authenticate()

export default admin;