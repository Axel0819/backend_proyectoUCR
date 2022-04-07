import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';
//statusPromotionCourse->0: deleted, 1: active, 2: inactive
//CHECK SCHEDULE FIELD-->FIELD FORMAT: L10 y k11-Ene 2022
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
        type: DataTypes.INTEGER(3)
    },
    schedule:{
        type: DataTypes.STRING(15),
        allowNull: false
    },
    place:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    statusPromotionCourse:{
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
        allowNull: false
    }
}, {
    hooks: {
        beforeCreate: (promotionCourse, options) => {
            promotionCourse.availableQuotas= promotionCourse.totalQuotas;
        }
    },
    indexes: [{fields:['idPromotionCourse']}],
});


export default promotionCourses;