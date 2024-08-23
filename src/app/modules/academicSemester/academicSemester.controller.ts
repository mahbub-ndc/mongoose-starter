import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterService } from './academicSemester.service';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const semesterData = req.body;
  const result = await academicSemesterService.createSemester(semesterData);
  res.status(200).json({
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

export const academicSemesterController = {
  createSemester,
};
