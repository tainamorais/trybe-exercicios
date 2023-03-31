const { Student, Course } = require('../models'); // é o index

const getStudents = async () => await Student.findAll({ include: { model: Course, as: 'course' } });

const createStudent = async ({ name, email, birthday, active, idCourse }) => await Student.create({ name, email, birthday, active, idCourse });

module.exports = { getStudents, createStudent };
