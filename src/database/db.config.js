const { Sequelize } = require("sequelize");

const db = new Sequelize('cecamm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;