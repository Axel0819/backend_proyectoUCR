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
        type: DataTypes.STRING,
        primaryKey: true,
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
        type: DataTypes.STRING,
        allowNull: false
    },
    firstSurname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    secondSurname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
},{
    freezeTableName: true,
    indexes: [{fields:['idEnrolledStudent']}],
    timestamps: false
});

export default enrolledStudent;