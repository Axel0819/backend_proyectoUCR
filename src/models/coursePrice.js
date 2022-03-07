import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const coursePrice = connection.define('coursePrice', {
    idPrice: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idCourse: {
        type: DataTypes.STRING,
        references: {
            model: 'courses',
            key: 'OMIModel'
        },
    },
    nationalPrice: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,    
    },
    nationalRenewalPrice: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false
    },
    internationalPrice: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false
    },
    internationalRenewalPrice: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false
    }
}, {timestamps: false});

export default coursePrice;