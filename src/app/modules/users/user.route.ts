import express from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../students/student.validation';
import { createAdminValidationSchema } from '../admin/admin.validation';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.contstant';

const router = express.Router();

router.post(
  '/create-student',
  auth(USER_ROLE.admin),
  validateRequest(studentValidations.createStudentValidationSchema),
  userController.createStudent
);
router.post(
  '/create-admin',

  validateRequest(createAdminValidationSchema),
  userController.createAdmin
);

export const userRoute = router;
