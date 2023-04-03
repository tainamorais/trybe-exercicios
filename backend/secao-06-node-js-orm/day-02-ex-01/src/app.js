const express = require('express');

const employee = require('./Controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/employees', employee.getAll);
app.get('/employees/:id', employee.getById);

module.exports = app;
