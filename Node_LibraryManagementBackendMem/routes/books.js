var express = require('express');
var router = express.Router();

var book = require('../entities/books.js');

/* GET List of all books */
router.get('/', function(req, res, next) {
  res.jsonp(book.getBooks());
});

router.get('/:id', function(req, res, next) {
  res.jsonp(book.getBook(req.params['id']));
});

router.post('/', function(req, res, next) {
  res.jsonp(book.saveBook(new book(req.body['title'], req.body['description'])));
});

router.delete('/:id', function(req, res, next) {
  res.jsonp(book.deleteBook(req.params['id']));
});

router.put('/:id', function(req, res, next) {
  res.jsonp(book.updateBook(req.params['id'], req.body['title'], req.body['description']));
});

module.exports = router;
