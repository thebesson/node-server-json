// require our dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));

// route app
var router = require('./app/routes');
app.use('/', router);

app.listen(port, function() {
    console.log('Server is running');
  });