import connection from '../database/db.config.js';
import { DataTypes } from 'sequelize';

const electoralList = connection.define('electoralList', {
    idNumber: {type: DataTypes.STRING(9), primaryKey: true},
    completeName: DataTypes.STRING(30),
    firstSurname: DataTypes.STRING(26),
    secondSurname: DataTypes.STRING(26),
}, {
    indexes: [{fields:['idNumber']}],
});

export default electoralList;