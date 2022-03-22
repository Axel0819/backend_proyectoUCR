import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';
import useBcrypt from 'sequelize-bcrypt';

const user = connection.define('user', {
    idUser: {
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
    userStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{
    freezeTableName: true,
    timestamps: false
});

useBcrypt(user, { fields: ['password'] });
// user.authenticate()

export default user;