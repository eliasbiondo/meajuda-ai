const Sequelize = require('sequelize');

const connection = new Sequelize('meajuda_ai', 'elias', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

module.exports = connection;