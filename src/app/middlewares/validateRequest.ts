import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (zodschema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation check
      //if everything allright next() ->
      await zodschema.parseAsync({
        body: req.body,
      });

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default validateRequest;
