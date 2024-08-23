/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const statusCode = 400;
  const message = 'Not Found!';

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default notFound;
