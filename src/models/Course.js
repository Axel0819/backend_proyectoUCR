
const connection = require('../database/db.config');
const { DataTypes } = require('sequelize');

const Course = connection.define('course', {
    OMIModel: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
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
        allowNull: false}
},{timestamps: false}
);

module.exports = Course;