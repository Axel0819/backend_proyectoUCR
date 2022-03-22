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
        type: DataTypes.STRING,
        allowNull: false
    },
    idPdfCloudinary: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    freezeTableName: true,
    indexes: [{fields:['idCoursePdf']}],
    timestamps: false
});

export default coursePdf;