import { NextFunction, Request, Response } from "express";
import TodoService from "../../Domain/services/TodoService/TodoService";
import TodoView from "../views/TodoView";

class TodoController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      let serviceRep = await TodoService.getTodos();

      return response.status(200).send(serviceRep);
    } catch (ex) {
      next(ex);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, Name, Date, Done } = request.body;
      let todo = new TodoView({ id, Name, Date, Done });

      let serviceRep = await TodoService.createTodo(todo);

      if (serviceRep.status) return response.status(200).send("Deu bom chefe!");

      return response.status(400).send(serviceRep.message);
    } catch (ex) {
      next(ex);
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.query;

      let serviceRep = await TodoService.deleteTodo(String(id));

      if (serviceRep.status) return response.status(200).send("Deu bom chefe!");

      return response.status(400).send(serviceRep.message);
    } catch (ex) {
      next(ex);
    }
  }

  async done(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, Done } = request.body;

      let serviceRep = await TodoService.doneTodo(id, Done);
      
      (serviceRep.status) ? response.status(200).send("Deu bom chefe!") : response.status(400).send(serviceRep.message);

    } catch (ex) {
      next(ex);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const { id, Name } = request.body;

      let serviceRep = await TodoService.updateTodo(id, Name);
      
      (serviceRep.status) ? response.status(200).send("Deu bom chefe!") : response.status(400).send(serviceRep.message);
      
    } catch (ex) {
      next(ex);
    }
  }
}

export default new TodoController();
