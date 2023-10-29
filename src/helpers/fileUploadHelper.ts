import { v2 as cloudinary } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import { ICoudinatyResponse, IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: 'dxiwswjfc',
  api_key: '336271452441276',
  api_secret: 'P954HqxsAjRNVxlMq7t7j8ZPug4'
});

const uploadToCloudinary = async (file: IUploadFile): Promise<ICoudinatyResponse> => {
  return new Promise((resolve, reject) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cloudinary.uploader.upload(file.path, (error: Error, result: ICoudinatyResponse) => {
      fs.unlinkSync(file.path);
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

const upload = multer({ storage: storage });

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
