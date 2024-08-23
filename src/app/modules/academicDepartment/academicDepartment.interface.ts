import { Types } from 'mongoose';

export type IAcademicDepartment = {
  title: string;
  acdemicFaculty: Types.ObjectId;
};
