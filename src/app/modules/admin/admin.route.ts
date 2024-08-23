import express from 'express';
import { adminController } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../users/user.contstant';

const router = express.Router();
router.get('/', auth(USER_ROLE.admin), adminController.getAllAdmins);

export const adminRoute = {
  router,
};
