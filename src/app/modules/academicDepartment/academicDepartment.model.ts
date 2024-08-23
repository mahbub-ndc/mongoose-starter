import { model, Schema } from 'mongoose';
import { IAcademicDepartment } from './academicDepartment.interface';

const academicDepartmentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  academicFaculty: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'AcademicFaculty',
  },
});

academicDepartmentSchema.pre('save', async function (next) {
  const isExists = await AcademicDepartment.findOne({
    title: this.title,
  });
  if (isExists) {
    throw new Error('Academic department already exists!');
  }
  next();
});

export const AcademicDepartment = model<IAcademicDepartment>(
  'AcademicDepartment',
  academicDepartmentSchema
);
