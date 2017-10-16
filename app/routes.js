var fs = require('fs');
var books = require('./models/book.json');
// require express
var express = require('express');
var path = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;
router.get('/', function(request, response) {
    response.send('main path');
});

router.get('/books', function(request, response) {
    response.send(books.items);
});

router.get('/books/:id', function(request, response) {
    var id = request.params.id,
    book = books.items.find(function(book) {
        return book.id === id;
    });
    response.send(book);
});