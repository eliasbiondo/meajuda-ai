// Importing modules
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

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

// Application routes
app.use(routes);

// Server config
app.listen(port, error => {
    console.log(`${error ? 'There was an error while initializing server.' + error : `Server started successfully on port ${port}!`}`)
})
