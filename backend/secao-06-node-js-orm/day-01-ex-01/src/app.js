const express = require('express');
const { courseRoute, studentRoute } = require('./routes');

const app = express();

// BodyParser
/*
Quando não coloca:
Cannot destructure property 'name' of 'req.body' as it is undefined
*/
app.use(express.json());

app.use('/courses', courseRoute);
app.use('/students', studentRoute);

module.exports = app;
