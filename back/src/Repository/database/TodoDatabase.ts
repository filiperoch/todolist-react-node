import { response } from "express";
import { getRepository } from "typeorm";
import Messenger from "../../Domain/models/Messenger";
import TodoEntity from "../entities/TodoEntity";

class TodoDatabase {
  async index() {
    try {
      const repository = getRepository(TodoEntity);
      let todos = await repository
        .createQueryBuilder()
        .select("*")
        .where("1")
        .execute();

      return todos;
    } catch (ex) {
      throw ex;
    }
  }

  async create(todo: TodoEntity) {
    try {
      const repository = getRepository(TodoEntity);

      let newTodo = repository.create(todo);
      repository.save(newTodo);
      return new Messenger({
        status: true,
        message: "ToDo criado com sucesso!",
      });
    } catch (ex) {
      throw ex;
    }
  }

  async delete(Id: string) {
    try {
      const repository = getRepository(TodoEntity);

      const respDelete = await repository
        .createQueryBuilder()
        .delete()
        .from("todo")
        .where("Id = :Id", { Id: Id })
        .execute();

      if (respDelete.affected) {
        return new Messenger({
          status: true,
          message: "ToDo deletado com sucesso!",
        });
      }

      return new Messenger({ status: false, message: "ToDo não encontrado." });
    } catch (ex) {
      throw ex;
    }
  }

  async done(id: string, Done: boolean) {
    try {
      const repository = getRepository(TodoEntity);
      let respDone = await repository
        .createQueryBuilder()
        .update()
        .set({ Done: Done })
        .where("id = :id", { id: id })
        .execute();

      if (respDone.affected) {
        if (respDone.raw.changedRows > 0) {
          return new Messenger({
            status: true,
            message: "Todo concluído com sucesso!",
          });
        }
      }

      return new Messenger({
        status: false,
        message: "Todo não encontrado ou já concluído.",
      });
      
    } catch (ex) {
      throw ex;
    }
  }

  async update(id: string, Name: string) {
    try {
      const repository = getRepository(TodoEntity);
      let respDone = await repository
        .createQueryBuilder()
        .update()
        .set({ Name: Name })
        .where("id = :id", { id: id })
        .execute();

      if (respDone.affected) {
        if (respDone.raw.changedRows > 0) {
          return new Messenger({
            status: true,
            message: "Todo concluído com sucesso!",
          });
        }
      }

      return new Messenger({
        status: false,
        message: "Todo não encontrado ou já concluído.",
      });

    } catch (ex) {
      throw ex;
    }
  }
}

export default new TodoDatabase();
