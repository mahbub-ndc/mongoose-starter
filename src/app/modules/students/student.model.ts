import { Schema, model } from 'mongoose';
import { IStudent } from './student.interface';

const userNameSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema({
  fatherName: { type: String, required: true },
  fatherProfession: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherProfession: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGuardianSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema({
  id: { type: String, required: true, unique: true },
  user: {
    type: Schema.Types.ObjectId,
    requied: [true, 'Id is required'],
    unique: true,
    ref: 'User',
  },
  name: { type: userNameSchema, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  email: { type: String, required: true, unique: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    required: true,
  },
  contactNo: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  admissionSemester: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  profileImg: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Student = model<IStudent>('Student', studentSchema);
