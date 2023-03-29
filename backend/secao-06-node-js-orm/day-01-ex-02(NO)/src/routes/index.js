const express = require('express');
const BooksController = require('../controllers/BooksController');
const bookRoute = express.Router();

bookRoute.get('/', BooksController.getAll);
// console.log(BooksController.getAll);

module.exports = bookRoute;
