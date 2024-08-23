import express from 'express';
import { authController } from './auth.controller';
import { USER_ROLE } from '../modules/users/user.contstant';
import auth from '../middlewares/auth';
const router = express.Router();
router.post('/login', authController.loginUser);
router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.student),
  authController.changePassword
);
export const authRoute = {
  router,
};
