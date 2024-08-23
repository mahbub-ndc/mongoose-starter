import { Types } from 'mongoose';

export type userName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type guardian = {
  fatherName: string;
  fatherProfession: string;
  fatherContactNo: string;
  motherName: string;
  motherProfession: string;
  motherContactNo: string;
};

export type localGuardian = {
  name: string;
  ocupation: string;
  contactNo: string;
  address: string;
};

export type IStudent = {
  id: string;
  user: Types.ObjectId;
  name: userName;
  email: string;
  gender: 'male' | 'female';
  guardian: guardian;
  localGuardian: localGuardian;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  admissionSemester: Types.ObjectId;
  profileImg?: string;
  isDeleted: boolean;
};
