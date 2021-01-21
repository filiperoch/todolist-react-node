import { Router } from 'express';
import TodoController from '../Controllers/TodoController';

const TodoRoutes = Router();

TodoRoutes.get('/', TodoController.index);
TodoRoutes.post('/create', TodoController.create);
TodoRoutes.delete('/delete', TodoController.delete);
TodoRoutes.put('/done', TodoController.done);
TodoRoutes.put('/update', TodoController.update);

export default TodoRoutes;