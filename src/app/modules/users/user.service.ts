/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { config } from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { IStudent } from '../students/student.interface';
import { Student } from '../students/student.model';

import { academicSemester } from '../academicSemester/academicSemester.interface';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateAdminId, generateStudentId } from './user.util';
import { TAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

const createStudentInDb = async (password: string, student: IStudent) => {
  const user: Partial<TUser> = {};

  const admissionSemester = await AcademicSemester.findById(
    student.admissionSemester
  );

  user.password = password || config.default_password;
  user.role = 'student';

  const session = await mongoose.startSession();

  try {
    (await session).startTransaction();
    user.id = await generateStudentId(admissionSemester as academicSemester);
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new Error('Failed to create user!');
    }
    student.id = newUser[0].id;

    student.user = newUser[0]._id;
    const newStudent = await Student.create([student], { session });
    if (!newStudent.length) {
      throw new Error('Failed to create student!');
    }
    (await session).commitTransaction();
    (await session).endSession();
    return newStudent;
  } catch (err: any) {
    (await session).abortTransaction();
    (await session).endSession();
    throw new Error(err);
  }
};

const createAdminIntoDb = async (password: string, admin: TAdmin) => {
  const user: Partial<TUser> = {};
  user.role = 'admin';
  user.password = password || config.default_password;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    user.id = await generateAdminId();
    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new Error('Failed to create user');
    }

    admin.id = newUser[0].id;
    admin.user = newUser[0]._id;

    const newAdmin = await Admin.create([admin], { session });
    if (!newAdmin.length) {
      throw new Error('Failed to create admin');
    }
    await session.commitTransaction();
    await session.endSession();
    return newAdmin;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(error);
  }
};

export const userService = {
  createStudentInDb,
  createAdminIntoDb,
};
