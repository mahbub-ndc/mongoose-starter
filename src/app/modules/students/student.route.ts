import express from 'express';
import { studentController } from './student.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/user.contstant';

const router = express.Router();
router.get('/', auth(USER_ROLE.admin), studentController.getAllStudents);
router.get('/:studentId', studentController.getSingleStudent);
router.patch('/:studentId', studentController.upateStudent);

export const studentRoute = {
  router,
};
