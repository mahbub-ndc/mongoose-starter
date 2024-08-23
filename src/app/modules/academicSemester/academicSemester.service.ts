import { academicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (payload: academicSemester) => {
  const academicSemesterCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };
  if (academicSemesterCodeMapper[payload.name] !== payload.code) {
    throw new Error('Semester code does not match!');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};
export const academicSemesterService = {
  createSemester,
};
