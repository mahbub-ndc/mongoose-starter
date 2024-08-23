import { academicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

//2030 01 0001

export const generateStudentId = async (payload: academicSemester) => {
  let currentId = (0).toString();
  const lastStudentId = await findLastStudentId();

  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);

  if (
    lastStudentId &&
    lastStudentSemesterYear === payload.year &&
    lastStudentSemesterCode === payload.code
  ) {
    currentId = lastStudentId.substring(6);
  }

  let incrementedId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementedId = `${payload.year}${payload.code}${incrementedId}`;
  return incrementedId;
};

const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    }
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  let currentId = (0).toString();
  const lastAdminId = await findLastAdminId();
  if (lastAdminId) {
    currentId = lastAdminId.substring(2);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `A-${incrementId}`;
  return incrementId;
};
