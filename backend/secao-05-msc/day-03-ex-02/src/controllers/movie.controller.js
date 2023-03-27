const movieService = require('../services/movie.service');

const findAll = async (req, res) => {
  const filter = req.query ? req.query.filter : null;

  const movies = await movieService.findAll(filter);

  res.status(200).json(movies);
};

const findById = async (req, res) => {
  const id = req.params.id;

  // const movie = await movieService.findById(Number(id)); // após aplicação de erro undefined

  const { status, message } = await movieService.findById(Number(id));

  res.status(status).json(message);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;
  // validações de inputs / campos ou fazer no router com middleware

  const newMovie = await movieService.create({ title, directedBy, releaseYear });

  res.status(201).json(newMovie);
};

const update = async (req, res) => {
  const id = req.params.id;
  const { title, directedBy, releaseYear } = req.body;
  
  const { type, message } = await movieService.update(id, { title, directedBy, releaseYear });

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const remove = async (req, res) => {
  const id = req.params.id;

  const { type, message } = await movieService.remove(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });


  res.status(200).json(newMovie);
};

module.exports = { findAll, findById, create, update, remove };
