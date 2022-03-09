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
    },
    priceStatus: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
}, {timestamps: false});

export default coursePrice;