import { model, Schema } from 'mongoose';
import { IAcademicFaculty } from './academicFaculty.interface';

const academicFacultySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const AcademicFaculty = model<IAcademicFaculty>(
  'AcademicFaculty',
  academicFacultySchema
);
