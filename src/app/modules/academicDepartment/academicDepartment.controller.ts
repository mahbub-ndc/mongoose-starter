import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { academicDepartmentService } from './academicDepartment.service';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await academicDepartmentService.createDepartment(data);
  res.status(200).json({
    success: true,
    message: 'Academic Department created successfully!',
    data: result,
  });
});

const getAllDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await academicDepartmentService.getAllDepartment();
  res.status(200).json({
    success: true,
    message: 'Academic Department fetched successfully!',
    data: result,
  });
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await academicDepartmentService.getSingleDepartment(id);
  res.status(200).json({
    success: true,
    message: 'Academic Department fetched successfully!',
    data: result,
  });
});

export const academicDepartmentController = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
};
