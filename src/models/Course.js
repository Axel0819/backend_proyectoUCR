
import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const course = connection.define('course', {
    idCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPrice:{
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'coursePrice',
            key: 'idPrice'
        }
    },
    nameCourse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    totalHours: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    courseStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
},{
    freezeTableName: true,
    indexes: [{fields:['idCourse']}],
    timestamps: false
}
);

export default course;