import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../errors/apiError';
import { JwtHelper } from '../../helpers/jwtHelper';

const auth =
  (...requiredRoles: string[]) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      //get authorization token
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }
      // verify token
      let verifiedUser = null;

      verifiedUser = JwtHelper.verifyToken(token);

      if (!verifiedUser) {
        throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not authorized');
      }

      req.user = verifiedUser; // role  , userid

      // role diye guard korar jnno
      if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, 'Forbidden');
      }
      next();
    } catch (error) {
      next(error);
    }
    // return new Promise(async (resolve, reject) => {
    //   const token = req.headers.authorization;

    //   if (!token) {
    //     return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
    //   }

    //   const verifiedUser: IAuthUser = JwtHelper.verifyToken(token);

    //   if (!verifiedUser) {
    //     return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Unauthorized'));
    //   }

    //   req.user = verifiedUser;

    //   if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
    //     return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
    //   }

    //   resolve(verifiedUser);
    // })
    //   .then(() => next())
    //   .catch((err) => next(err));
  };

export default auth;
