import { IAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createDepartment = async (payload: IAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllDepartment = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleDepartment = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );
  return result;
};

export const academicDepartmentService = {
  createDepartment,
  getAllDepartment,
  getSingleDepartment,
};
