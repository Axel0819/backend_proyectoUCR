import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const courseLearnings = connection.define('courseLearning', {
    idLearning: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCourse: {
        type: DataTypes.STRING,
        references: {
            model: 'courses',
            key: 'OMIModel'
        },
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    indexes: ['idLearning'],
    timestamps: false
});

export default courseLearnings;