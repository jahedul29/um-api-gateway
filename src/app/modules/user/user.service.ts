import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { ICoudinatyResponse, IUploadFile } from '../../../interfaces/file';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImage: ICoudinatyResponse = await FileUploadHelper.uploadToCloudinary(file);
  console.log({ uploadedImage });
};

export const UserService = {
  createStudent
};
