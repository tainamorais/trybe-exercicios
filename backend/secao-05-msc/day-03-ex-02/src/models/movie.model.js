const connection = require('./connection');

const findAll = async (filter) => {
  if (filter) {
    const [movies] = await connection.execute('SELECT * FROM movies WHERE title LIKE ?', [`%${filter}%`]);
    return movies;
  };
  const [movies] = await connection.execute('SELECT * FROM movies');
  return movies;
};

const findById = async (id) => {
  const [[movie]] = await connection.execute('SELECT * FROM movies WHERE id = ?', [id]);

  return movie;
};

const create = async ({ title, directedBy, releaseYear }) => {
  const [movieCreated] = await connection.execute('INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)', [title, directedBy, releaseYear]);

  return { id: movieCreated.insertId, title, directed_by: directedBy, release_year: releaseYear };
};

const update = async (id, { title, directedBy, releaseYear }) => {
  const [response] = await connection.execute(
    'UPDATE movies set title = ?, directed_by = ?, release_year = ? WHERE id = ?', [title, directedBy, releaseYear, id]
  );

  return { id, title, directed_by: directedBy, release_year: releaseYear };
};

const remove = async (id) => {
  const [{affectedRows}] = await connection.execute(
    'DELETE FROM movies WHERE id = ?', [id]
  );

  if(affectedRows > 0) return 'Registro removido com sucesso!'
};

module.exports = { findAll, findById, create, update, remove };
