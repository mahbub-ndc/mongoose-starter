import { IStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudents = async (query: Record<string, unknown>) => {
  const searchableFields = [
    'email',
    'name.firstName',
    'guardian.fatherName',
    'address',
    'gender',
  ];

  const queryObj = { ...query };
  // console.log('base query', queryObj);

  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: searchableFields.map(field => ({
      [field]: {
        $regex: searchTerm,
        $options: 'i',
      },
    })),
  });

  const excludeFields = ['searchTerm'];
  excludeFields.forEach(el => delete queryObj[el]);
  console.log(query, queryObj);

  const result = await searchQuery.find(queryObj);
  return result;
};

const getSingleStudent = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const upateStudent = async (id: string, payload: Partial<IStudent>) => {
  const result = await Student.findOneAndUpdate({ id }, payload, { new: true });
  return result;
};

export const studentService = {
  getAllStudents,
  getSingleStudent,
  upateStudent,
};
