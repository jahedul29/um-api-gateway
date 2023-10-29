
import { Request, Response, NextFunction } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';
const create = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.create(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.findAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.findOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const update = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.update(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const deleteOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicSemesterService.deleteOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

export const AcademicSemesterController = {
    create,
    findAll,
    findOne,
    update,
    deleteOne
}