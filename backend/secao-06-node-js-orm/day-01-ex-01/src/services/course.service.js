const { Course } = require('../models'); // é o index

const getAll = async () => {
  const courses = await Course.findAll();
  return courses;
};

const getById = async (id) => {
  const course = await Course.findByPk(id);
  return course;
};

const getByIdAndName = async (id, name) => {
  const course = await Course.findOne({ where: { id, name } });

  return course;
};

const createCourse = async (name, description, creation_date, active, duration) => {
  const newCourse = await Course.create({ name, description, creation_date, active, duration });

  return newCourse;
};

const updateCourse = async (id, name, description, creation_date, active, duration) => {
  const [updatedCourse] = await Course.update(
    { name, description, creation_date, active, duration },
    { where: { id } },
  );

  console.log(updatedCourse); // confira o que é retornado quando o user com o id é ou não encontrado;
  return updatedCourse;
};

const deleteCourse = async (id) => {
  const course = await Course.destroy(
    { where: { id } },
  );

  console.log(course); // confira o que é retornado quando o user com o id é ou não encontrado;
  return course;
};

module.exports = { getAll, getById, getByIdAndName, createCourse, updateCourse, deleteCourse };
