import { userRoute } from '../modules/users/user.route';
import { studentRoute } from '../modules/students/student.route';
import { Router } from 'express';
import { academicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { facultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { departmentRoutes } from '../modules/academicDepartment/academicDepartment.route';
import { adminRoute } from '../modules/admin/admin.route';
import { authRoute } from '../auth/auth.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/admins',
    route: adminRoute.router,
  },
  {
    path: '/auth',
    route: authRoute.router,
  },
  {
    path: '/students',
    route: studentRoute.router,
  },
  {
    path: '/academic-semester',
    route: academicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: facultyRoutes,
  },
  {
    path: '/academic-department',
    route: departmentRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users', userRoute.router);
// router.use('/students', studentRoute.router);
export default router;
