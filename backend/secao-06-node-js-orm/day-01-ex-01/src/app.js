const express = require('express');
const courseRoute = require('./routes');

const app = express();

app.use('/course', courseRoute);

module.exports = app;
