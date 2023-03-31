const studentService = require('../services/student.service');

const getStudents = async (_req, res) => {
  const students = await studentService.getStudents();
  res.status(200).json(students);
};

const createStudent = async (req, res) => {
  const newStudent = await studentService.createStudent(req.body);
  return res.status(201).json(newStudent);
};

module.exports = { getStudents, createStudent };
