import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { studentService } from './student.service';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  console.log('test', req.user);
  const result = await studentService.getAllStudents(req.query);
  res.status(200).json({
    success: true,
    message: 'All students are retrived successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  console.log(studentId);
  const result = await studentService.getSingleStudent(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is retreived successfully',
    data: result,
  });
});

const upateStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const { student } = req.body;
  // console.log(studentId);
  const result = await studentService.upateStudent(studentId, student);
  res.status(200).json({
    success: true,
    message: 'Student is updated successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudents,
  getSingleStudent,
  upateStudent,
};
