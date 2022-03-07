import { Sequelize } from "sequelize";

const db = new Sequelize('cecamm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;
