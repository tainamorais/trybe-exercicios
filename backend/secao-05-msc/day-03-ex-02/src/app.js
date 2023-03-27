const express = require('express');
const movieRoutes = require('./routes/movie.routes');

const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.use(express.json());

app.use('/movies', movieRoutes);

// func padrão
app.get('/', (_req, res) => {
  res.send();
});

app.use(errorHandler);

module.exports = app;
