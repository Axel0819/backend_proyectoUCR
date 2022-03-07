import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const promotionCourses = connection.define('promotionCourse', {
    idCourse: {
        type: DataTypes.STRING,
        references: {
            model: 'courses',
            key: 'OMIModel'
        }
    },
    idPromotion: {
        type: DataTypes.UUID,
        references: {
            model: 'enrollmentPromotions',
            key: 'enrollmentId'
        }
    },
    quotas:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
} , {timestamps: false});

promotionCourses.removeAttribute('id');

export default promotionCourses;