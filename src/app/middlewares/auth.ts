import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../config';
import { TUserRole } from '../modules/users/user.contstant';
import { User } from '../modules/users/user.model';

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) {
      throw new Error('You are not authorized!');
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    //const { userId, role, iat } = decoded;

    console.log('testing decode', decoded);

    // checking if the user is exist
    const user = await User.isUserExixstInDb(decoded.userId);

    console.log(decoded.userId);

    // console.log(user);

    if (!user) {
      throw new Error('This user is not found !');
    }

    if (requiredRoles && !requiredRoles.includes(decoded.role)) {
      throw new Error('You are not authorized  hi!');
    }
    req.user = decoded;

    next();
  });
};

export default auth;
