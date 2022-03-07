import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';


//CHECK DETAILS
const enrolledStudent = connection.define('enrolledStudent', {
    ID_Student: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    ID_Course: {
        type: DataTypes.STRING,
        references: {
            model: 'courses',
            key: 'OMIModel'
        },
        allowNull: false
    },
    id_promotion: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'enrollmentPromotions',
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
        defaultValue: 1,
    }
},{
    timestamps: false
});

export default enrolledStudent;