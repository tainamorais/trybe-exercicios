const { Router } = require('express');
const movieController = require('../controllers/movie.controller');

const router = Router();

router.get('/', movieController.findAll);
router.get('/:id', movieController.findById);
router.post('/', movieController.create);

module.exports = router;
