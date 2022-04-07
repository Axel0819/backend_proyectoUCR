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
        type: DataTypes.STRING(150),
        allowNull: false
    },
    idCloudinaryImage: {
        type: DataTypes.STRING(35),
        allowNull: false
    }
},{
    indexes: [{fields:['idCourseImage']}],
});

export default courseImage;