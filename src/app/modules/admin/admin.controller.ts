import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { adminService } from './admin.service';

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  //console.log('hello111111', req.user);
  const result = await adminService.getAllAdmins();
  res.status(200).json({
    success: true,
    message: 'All admins are retrived successfully',
    data: result,
  });
});

export const adminController = {
  getAllAdmins,
};
