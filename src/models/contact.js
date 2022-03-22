import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const contact = connection.define('contact', {
    idContact: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstSurname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondSurname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(12),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
},{
    freezeTableName: true,
    indexes: [{fields:['idContact']}],
    timestamps: false
});

export default contact;