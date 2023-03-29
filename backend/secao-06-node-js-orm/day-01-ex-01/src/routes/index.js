const express = require('express');
const courseController = require('../controllers/course.controller');
const courseRoute = express.Router();

courseRoute.get('/', courseController.getAll);
courseRoute.get('/:id', courseController.getById);
courseRoute.get('/search/:id', courseController.getByIdAndName);
courseRoute.post('/', courseController.createCourse);
courseRoute.put('/:id', courseController.updateCourse);
courseRoute.delete('/:id', courseController.deleteCourse);

module.exports = courseRoute;
