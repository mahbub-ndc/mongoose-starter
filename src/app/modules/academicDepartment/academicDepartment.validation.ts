import { z } from 'zod';

const academicDepartmentValidationZodSchema = z.object({
  body: z.object({
    title: z.string(),
    academicFaculty: z.string(),
  }),
});

export const academicDepartmentValidation = {
  academicDepartmentValidationZodSchema,
};
