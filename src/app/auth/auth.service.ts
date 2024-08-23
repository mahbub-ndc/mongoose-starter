import { config } from '../config';
import { User } from '../modules/users/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  //console.log(payload);

  const user = await User.isUserExixstInDb(payload.id);
  console.log(user.id);

  if (!user) {
    throw new Error('User does not exists');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new Error('Password does not match!');
  }

  const jwtPayload = {
    userId: user?.id,
    role: user?.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    accessToken,
    needsPasswordChange: user?.needsPasswordChange,
  };
};

// const changePassword = async (
//   userData: JwtPayload,
//   payload: { oldPassword: string; newPassword: string }
// ) => {
//   const user = await User.isUserExixstInDb(userData.userId);

//   const newHashedPassword = await bcrypt.hash(
//     payload.newPassword,
//     Number(config.bcrypt_salt_rounds)
//   );

//   await User.findOneAndUpdate(
//     {
//       id: user.id,
//       role: user.role,
//     },
//     {
//       password: newHashedPassword,
//       needsPasswordChange: false,
//       passwordChangedAt: new Date(),
//     }
//   );
// };

export const authService = {
  loginUser,
  //changePassword,
};
