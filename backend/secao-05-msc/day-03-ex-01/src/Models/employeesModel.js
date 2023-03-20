const { connection } = require('./connection');

// implementando getAll pegar do banco de dados todos os employees
const getAll = async () => {
  const query = 'SELECT * FROM exercises.employees';
  const [employees] = await connection.execute(query);
  return employees;
};

const create = async ({ firstName, lastName, office }) => {
  const query = 'INSERT INTO exercises.employees (first_name, last_name, office) VALUES (?, ?, ?)';
  const [newEmployee] = await connection.execute(query, [firstName, lastName, office]);
  return newEmployee.insertId;
};

module.exports = {
  getAll,
  create,
};
