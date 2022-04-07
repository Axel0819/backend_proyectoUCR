import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const enrolledStudent = connection.define('enrolledStudent', {
    idEnrolledStudent: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idNumber: {
        type: DataTypes.STRING(15),
        primaryKey: true,
        allowNull: false
    },
    identificationType: {
        type: DataTypes.INTEGER(1),
        allowNull: false
    },
    idPromotionCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'promotionCourse',
            key: 'idPromotionCourse'
        },
        allowNull: false
    },
    idPromotion: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'enrollmentPromotion',
            key: 'enrollmentId'
        }
    },
    nameStudent: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    firstSurname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    secondSurname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(35),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    studentStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1,
    }
},{
    indexes: [{fields:['idEnrolledStudent']}],
});

export default enrolledStudent;