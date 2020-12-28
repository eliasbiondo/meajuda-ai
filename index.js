// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const env = require('dotenv');
const colors = require('colors');
const routes = require('./routes');
const connection = require('./database/connection');

//Enviroment variables
env.config()

// Setting the application port
const port = process.env.PORT || 4000;

// Express
const app = express();

// Setting the public content directory
app.use(express.static('public'));

// Setting the view engine to 'ejs'
app.set('view engine', 'ejs');

// Body Parser config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database connection
connection
    .authenticate()
    .then( () => {
        console.log('The database connection has been established successfully.'.green);
})
    .catch(error => {
        console.log('Unable to connect to the database:\r\n'.red);
        console.log(error);
    })

// Application routes
app.use(routes);

// Server config
app.listen(port, error => {
    console.log(`${error ? '\r\nThere was an error while initializing server.' + error : `\r\nServer started successfully on port ${port}!`.bold.green}`)
})
