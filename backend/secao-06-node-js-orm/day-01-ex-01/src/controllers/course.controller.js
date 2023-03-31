const courseService = require('../services/course.service');

const getAll = async (_req, res) => {
  const courses = await courseService.getAll();
  res.status(200).json(courses);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { withStudents } = req.query;
  const course = await courseService.getById(id, withStudents === 'true');
  res.status(200).json(course);
};

const getByIdAndName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  const course = await courseService.getByIdAndName(id, name);

  if (!course) return res.status(404).json({ message: 'Curso não encontrado' });

  return res.status(200).json(course);
};

const createCourse = async (req, res) => {
  const { name, description, creation_date, active, duration } = req.body;
  const newCourse = await courseService.createCourse(name, description, creation_date, active, duration);

  return res.status(201).json(newCourse);
};

const updateCourse = async (req, res) => {
  const { name, description, creation_date, active, duration } = req.body;
  const { id } = req.params;
  const updatedCourse = await courseService.updateCourse(id, name, description, creation_date, active, duration);

  if (!updatedCourse) return res.status(404).json({ message: 'Curso não encontrado' });

  return res.status(200).json({ message: 'Curso atualizado com sucesso!' });
};

const deleteCourse = async (req, res) => {
  const { id } = req.params;
  await courseService.deleteCourse(id);

  return res.status(200).json({ message: 'Curso excluído com sucesso!' });
};

module.exports = { getAll, getById, getByIdAndName, createCourse, updateCourse, deleteCourse };