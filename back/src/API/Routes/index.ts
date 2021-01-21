import {Router} from 'express'
import TodoRoutes from './TodoRoutes';

const routes = Router();

routes.use('/todo', TodoRoutes);


export default routes;
