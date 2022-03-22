import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const courseImage = connection.define('courseImage', {
    idCourseImage: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idCourse:{
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'course',
            key: 'idCourse'
        },
        allowNull: false,
    },
    urlImage: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCloudinaryImage: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    indexes: [{fields:['idCourseImage']}],
    timestamps: false
});

export default courseImage;