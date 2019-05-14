//LIBS AND MODULES
var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./middlewares');
//var logger = require('./logger');

//ROUTES 
var autentication_api = require('./lib/autentication');

//APP SETUP
var app = express();
var port = 8080;

//MIDDLEWARS SETUP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
middleware.setupAccessLog(app);
middleware.enableCORS(app);

//********************************************************************  
//V1 ROUTES SETUP 
app.use('/api', autentication_api);

app.get('/api', (req, res) =>
    res.send(`Microblog Exercise Api v0.0.1`)
);

//********************************************************************
//INITIALIZATION
module.exports = app.listen(port, () =>
    console.log(`STARTED - Microblog Exercise API is running on port ${port}`)
);