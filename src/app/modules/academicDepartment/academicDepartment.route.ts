import express from 'express';
import { academicDepartmentController } from './academicDepartment.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicDepartmentValidation } from './academicDepartment.validation';
const router = express.Router();
router.post(
  '/create-department',
  validateRequest(
    academicDepartmentValidation.academicDepartmentValidationZodSchema
  ),
  academicDepartmentController.createDepartment
);
router.get('/', academicDepartmentController.getAllDepartment);
router.get('/:id', academicDepartmentController.getSingleDepartment);

export const departmentRoutes = router;
