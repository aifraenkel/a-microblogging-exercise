var express = require('express');
const querystring = require('querystring'); 
var app = module.exports = express();

//var model = require('./model');

app.post('/signup', function(req, res) {

    res.json("Signup Done!");

    //model.createUser(req)
    //model.getMovies(function(movies)
    //{
    //    res.json(movies);
    //});
    return;
});
