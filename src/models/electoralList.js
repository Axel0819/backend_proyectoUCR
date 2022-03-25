import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const electoralList = connection.define('electoralList', {
    idNumber: {type: DataTypes.STRING(9), primaryKey: true},
    electoralCode: DataTypes.STRING(9),
    backfill: DataTypes.STRING(1),
    idExpirationDate: DataTypes.STRING(8),
    board: DataTypes.STRING(5),
    completeName: DataTypes.STRING(30),
    firstSurname: DataTypes.STRING(26),
    secondSurname: DataTypes.STRING(26),
}, {
    freezeTableName: true,
    timestamps: false
});

export default electoralList;