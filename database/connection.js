const Sequelize = require('sequelize');
const env = require('dotenv');

env.config()

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
})

module.exports = connection;