import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const promotionCourses = connection.define('promotionCourse', {
    idPromotionCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCourse: {
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
            model: 'course',
            key: 'idCourse'
        }
    },
    idPromotion: {
        type: DataTypes.UUID,
        references: {
            model: 'enrollmentPromotion',
            key: 'enrollmentId'
        }
    },
    totalQuotas:{
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    availableQuotas: {
        type: DataTypes.INTEGER(3),
        allowNull: false
    },
    schedule:{
        type: DataTypes.STRING,
        allowNull: false
    },
    startDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    place:{
        type: DataTypes.STRING,
        allowNull: false
    },
    statusPromotionCourse:{
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    }
}, {
    freezeTableName: true,
    indexes: [{fields:['idPromotionCourse']}],
    timestamps: false});


export default promotionCourses;