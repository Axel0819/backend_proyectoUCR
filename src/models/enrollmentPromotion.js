import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const enrollmentPromotion = connection.define('enrollmentPromotion', {
    enrollmentId: {
        type:DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    namePromotion: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    startTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    endTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    promotionStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1,
    }
}, {
    indexes:[{fields:['enrollmentId']}],
});

export default enrollmentPromotion;