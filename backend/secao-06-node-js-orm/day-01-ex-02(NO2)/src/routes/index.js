const express = require('express');
const bookRoute = express.Router();
const bookController = require('../controllers/book.controller');

bookRoute.get('/', bookController.getAll);

module.exports = bookRoute;
