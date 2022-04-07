
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
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    totalHours: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    courseStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    }
},{
    indexes: [{fields:['idCourse']}]
}
);

export default course;