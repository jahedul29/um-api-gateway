
import { Request, Response, NextFunction } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';
const create = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.create(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findAll = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.findAll(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const findOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.findOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const update = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.update(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

const deleteOne = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await AcademicFacultyService.deleteOne(req);
        sendResponse(res, result);
    } catch (err) {
        next(err)
    }
}

export const AcademicFacultyController = {
    create,
    findAll,
    findOne,
    update,
    deleteOne
}