import { model, Schema } from 'mongoose';
import { code, months, name } from './academicSemester.contstant';
import { academicSemester } from './academicSemester.interface';

const academicSemesterSchema = new Schema(
  {
    name: {
      type: String,
      enum: name,
      required: true,
    },
    year: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      enum: code,
      required: true,
    },
    startMonth: {
      type: String,
      enum: months,
      required: true,
    },
    endMonth: {
      type: String,
      enum: months,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExisted = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemesterExisted) {
    throw new Error('Semester already exists!');
  }
  next();
});

export const AcademicSemester = model<academicSemester>(
  'AcademicSemester',
  academicSemesterSchema
);
