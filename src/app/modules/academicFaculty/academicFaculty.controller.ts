import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { academicFacultyService } from './acadmicFaculty.service';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const facultyName = req.body;
  const result = await academicFacultyService.createFaculty(facultyName);
  res.status(200).json({
    success: true,
    message: 'Academic Faculty is created Successfully!',
    data: result,
  });
});

const getAllFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await academicFacultyService.getAllFaculty();
  res.status(200).json({
    success: true,
    message: 'Academic Faculty fetched Successfully!',
    data: result,
  });
});

export const academicFacultyController = {
  createFaculty,
  getAllFaculty,
};
