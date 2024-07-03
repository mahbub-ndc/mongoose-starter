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
  name: userName;
  email: string;
  guardian: guardian;
  localGuardian: localGuardian;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  contactNo: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
