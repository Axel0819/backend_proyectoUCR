import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const courseComments = connection.define('courseComment', {
    idComment: {
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
        },
        allowNull: false
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    persoName: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    creatAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
    }
}, {
    indexes: [{fields:['idComment']}],
});

export default courseComments;