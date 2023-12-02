import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpService } from '../../../shared/axios';

const create = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-semesters', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const findAll = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const findOne = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const update = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.patch(
    `/academic-semesters/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOne = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const AcademicSemesterService = {
  create,
  findAll,
  findOne,
  update,
  deleteOne
};
