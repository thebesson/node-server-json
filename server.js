// require our dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8080;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
// route app
var router = require('./app/routes');
// Enable CORS so that we can make HTTP request
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', router);

app.listen(port, function() {
    console.log('Server is running');
  });