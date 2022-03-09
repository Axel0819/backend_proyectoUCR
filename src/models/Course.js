
import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const course = connection.define('course', {
    OMIModel: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nameCourse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    schedule:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    weeklyHours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    courseStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{
    indexes: ['OMIModel'],
    timestamps: false
}
);

export default course;