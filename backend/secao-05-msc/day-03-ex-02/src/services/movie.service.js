const movieModel = require('../models/movie.model');

const findAll = async (filter) => {
  const movies = await movieModel.findAll(filter);
  return movies;
};

const findById = async (id) => {
  const movie = await movieModel.findById(id);

  if (movie === undefined) return { status: 404, message: 'Dados não localizados'}; // exemplo dentro, ideal à parte

  return { status: 200, message: movie};
};

const create = async ({ title, directedBy, releaseYear }) => {
  // validações de regras de negócio
  const newMovie = await movieModel.create({ title, directedBy, releaseYear });

  return newMovie;
};

module.exports = { findAll, findById, create };
