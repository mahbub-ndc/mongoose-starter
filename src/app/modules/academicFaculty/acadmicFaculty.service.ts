import { IAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createFaculty = async (payload: IAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllFaculty = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

export const academicFacultyService = {
  createFaculty,
  getAllFaculty,
};
