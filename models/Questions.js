const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Questions = connection.define('questions', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Questions.sync({force: false});

module.exports = Questions;