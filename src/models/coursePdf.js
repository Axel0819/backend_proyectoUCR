import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const coursePdf = connection.define('coursePdf', {
    idCoursePdf: {
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
    urlPdf: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    idPdfCloudinary: {
        type: DataTypes.STRING(35),
        allowNull: false
    }
},{
    indexes: [{fields:['idCoursePdf']}],
});

export default coursePdf;