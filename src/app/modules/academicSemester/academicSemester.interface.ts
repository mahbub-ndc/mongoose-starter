export type Month =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

type semesterCode = '01' | '02' | '03';
type semesterName = 'Autumn' | 'Summer' | 'Fall';

export type academicSemester = {
  name: semesterName;
  code: semesterCode;
  year: string;
  startMonth: Month;
  endMonth: Month;
};
