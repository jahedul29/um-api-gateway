import express from 'express';
import { AcademicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouter } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRouter } from '../modules/academicDepartment/academicDepartment.route';
import { UserRouter } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    routes: UserRouter
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRouter
  },
  {
    path: '/academic-faculties',
    routes: AcademicFacultyRouter
  },
  {
    path: '/academic-departments',
    routes: AcademicDepartmentRouter
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
