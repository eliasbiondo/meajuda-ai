const Sequelize = require('sequelize');
const env = require('dotenv');

env.config()

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './database/database.sqlite',
    logging: false
})

module.exports = connection;