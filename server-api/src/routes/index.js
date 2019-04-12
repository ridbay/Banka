import { Router } from 'express';
import User from '../controllers/User';

const routes = Router();
routes.get('/', User.getAllStudents);
routes.get('/:id', User.getSingleStudent);
export default routes;
