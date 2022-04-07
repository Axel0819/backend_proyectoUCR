import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const coursePrice = connection.define('coursePrice', {
    idPrice: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nationalPrice: {
        type: DataTypes.DECIMAL(6, 2).UNSIGNED,
        allowNull: false,    
    },
    nationalRenewalPrice: {
        type: DataTypes.DECIMAL(6, 2).UNSIGNED,
        allowNull: false
    },
    internationalPrice: {
        type: DataTypes.DECIMAL(6, 2).UNSIGNED,
        allowNull: false
    },
    internationalRenewalPrice: {
        type: DataTypes.DECIMAL(6, 2).UNSIGNED,
        allowNull: false
    },
    priceStatus: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        defaultValue: 1
    }
}, {
    indexes: [{fields:['idPrice']}],
});

export default coursePrice;