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
        type: DataTypes.STRING(20),
        allowNull: false
    },
    firstSurname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    secondSurname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    message:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
},{
    indexes: [{fields:['idContact']}]
});

export default contact;