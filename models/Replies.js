const Sequelize = require('sequelize');
const connection = require('../database/connection')

const Replies = connection.define('replies', {
    question_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reply: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Replies.sync({force: false});

module.exports = Replies;