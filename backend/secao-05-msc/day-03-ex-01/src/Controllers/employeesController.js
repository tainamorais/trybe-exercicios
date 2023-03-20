const employeesService = require('../Services/employessService');

// implementando getAll pegar do banco de dados todos os employees
const getAll = async (_req, res) => {
  const employees = await employeesService.getAll();
  res.status(200).json(employees);
};

// implementando create employee, para inserir no DB new employee
const create = async (req, res, next) => {
  try {
    const { firstName, lastName, office } = req.body;

    const newEmployee = await employeesService.create({ firstName, lastName, office });
    res.status(201).json(newEmployee);
  } catch (error) {
    // return res.status(error.status).json({ message: error.message });
    next(error);
  }
};

// implementando create employees, para inserir no DB um array de new employees
const createMany = async (req, res, next) => {
  try {
    const employees = req.body;

    const newEmployes = await employeesService.createMany(employees);

    res.status(201).json(newEmployes);
  } catch (error) {
    // return res.status(error.status).json({ message: error.message });
    next(error);
  }
};

module.exports = {
  getAll,
  create,
  createMany,
};
