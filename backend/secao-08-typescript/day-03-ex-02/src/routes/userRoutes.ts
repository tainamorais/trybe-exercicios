import { Router } from 'express';
import UserController from "../controllers/user.controller";
import userController from '../controllers/user.controller';

const router = Router();

router.post('/login', userController.login);

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);

export default router;
