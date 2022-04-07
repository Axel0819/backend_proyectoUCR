import { Sequelize } from "sequelize";

const db = new Sequelize('cecamm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true,
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
    logging: false,
});

export default db;
