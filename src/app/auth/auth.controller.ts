import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { authService } from './auth.service';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  res.status(200).json({
    success: true,
    message: 'Login successfull!',
    data: result,
  });
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { ...passwordData } = req.body;
  const result = await authService.changePassword(req.user, passwordData);

  res.status(200).json({
    success: true,
    message: 'Password is updated Successfully!',
    data: result,
  });
});

export const authController = {
  loginUser,
  changePassword,
};
