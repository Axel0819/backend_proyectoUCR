import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const courseLearnings = connection.define('courseLearning', {
    idLearning: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    idCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'course',
            key: 'idCourse'
        },
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    indexes: [{fields:['idLearning']}],
});

export default courseLearnings;