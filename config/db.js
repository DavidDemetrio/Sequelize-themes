import { Sequelize } from "sequelize";
import 'dotenv/config';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    port: process.env.DB_PORT,
    dialect: 'mysql',
    timezone: '-06:00',
    define: {
        timestamps: false
    },
    pool: {
        max:5,
        min:0,
        acquire: 300000,
        idle: 10000
    },
    operatorAliases: false
});

export default sequelize;