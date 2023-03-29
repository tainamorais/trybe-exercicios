const express = require('express');
const bookRoute = require('./routes');

const app = express();
// app.use(express.json());

app.use('/books', bookRoute);

module.exports = app;
