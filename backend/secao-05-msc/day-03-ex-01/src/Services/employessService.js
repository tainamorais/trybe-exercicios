const Joi = require('joi');

const employeesModel = require('../Models/employeesModel');
const officesModel = require('../Models/officesModel');


const employeeSchema = Joi.object({
  firstName: Joi.string().min(2).max(45).required().label('firstName'),
  lastName: Joi.string().min(2).max(45).required().label('lastName'),
  office: Joi.number().min(1).required().label('office'),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} must be at least {{#limit}} characters long',
  'string.max': '{{#label}} must be have a max of {{#limit}} characters long',
  'string.empty': '{{#label}} must not be empty',
});

// implementando getAll pegar do banco de dados todos os employees
// responsabilidade da service são as regras de negócio, mas que em getAll não tem regras
const getAll = async () => {
  const employees = await employeesModel.getAll();
  return employees;
};

const create = async ({ firstName, lastName, office }) => {
  const { error } = employeeSchema.validate({ firstName, lastName, office });
  if (error) throw { status: 400, message: error.message };

  // ver se id foreign key existe no DB
  const findOffice = await officesModel.getById(office);
  if (!findOffice) throw { status: 400, message: '"office" must be valid' };
  
  const id = await employeesModel.create({ firstName, lastName, office });

  return { id, firstName, lastName, office };
};

const createMany = async (employeesArray) => {
  const employeesArraySchema = Joi.array().items(employeeSchema);

  const { error } = employeesArraySchema.validate(employeesArray);
  if (error) throw { status: 400, message: error.message };

  const newEmployeesPromises = employeesArray.map((employee) => employeesModel.create(employee));

  const newEmployeesResolvePromises = await Promise.all(newEmployeesPromises);

  const newEmployees = employeesArray
    .map((employee, index) => ({ id: newEmployeesResolvePromises[index],...employee }));

  return newEmployees.sort((a, b) => a.id - b.id);
};

module.exports = {
  getAll,
  create,
  createMany,
};
