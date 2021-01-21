import TodoView from '../../../API/views/TodoView';
import TodoEntity from '../../../Repository/entities/TodoEntity';
import TodoDatabase from '../../../Repository/database/TodoDatabase';

class TodoService {
    async createTodo(todoView: TodoView){

        const todo = new TodoEntity(todoView);
        let dataBaseResp = await TodoDatabase.create(todo);

        return dataBaseResp;
    }

    async getTodos() {

        let todos = await TodoDatabase.index();

        const todosView:Array<TodoView> = [];

        todos.forEach((todo: TodoEntity) => {
            todosView.push(new TodoView(todo));
        });

        return todosView;
    }

    async deleteTodo(Id: string) {
        
        let dataBaseResp = await TodoDatabase.delete(Id);

        return dataBaseResp;
    }

    async doneTodo(id: string, Done: boolean) {

        let dataBaseResp = await TodoDatabase.done(id, Done);

        return dataBaseResp;
    }

    async updateTodo(id: string, Name: string) {

        let dataBaseResp = await TodoDatabase.update(id, Name);

        return dataBaseResp;
    }
}

export default new TodoService();