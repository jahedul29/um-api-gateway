import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { UserService } from './user.service';

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createStudent(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const UserController = {
  createStudent
};
