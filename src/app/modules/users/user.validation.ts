import { z } from 'zod';
const userValidationSchema = z.object({
  password: z
    .string({
      required_error: 'Password must be string',
    })
    .max(5, { message: 'Must be 5 or fewer characters long' })
    .optional(),
});

export const zoddationSchema = {
  userValidationSchema,
};
