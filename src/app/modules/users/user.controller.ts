import { Request, Response } from 'express';
import { userService } from './user.service';

import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { password, student } = req.body;
  const result = await userService.createStudentInDb(password, student);

  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const { password, admin } = req.body;
  const result = await userService.createAdminIntoDb(password, admin);

  res.status(200).json({
    success: true,
    message: 'Admin is created successfully',
    data: result,
  });
});

export const userController = {
  createStudent,
  createAdmin,
};
