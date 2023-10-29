
import { Request, Response, NextFunction } from 'express';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/response';
const create = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.create(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.findAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.findOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const update = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.update(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const deleteOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicDepartmentService.deleteOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

export const AcademicDepartmentController = {
    create,
    findAll,
    findOne,
    update,
    deleteOne
}