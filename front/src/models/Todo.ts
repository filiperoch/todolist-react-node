export interface TodoInterface {
    id: string;
    Name: string;
    Date: Date;
    Done: boolean;
}

export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

export interface TodoListInterface {
  handleTodoUpdate: (Name: string, id: string) => void;
  updateStateTodo: (Name: string, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoDone: (id: string, Done: boolean) => void;
  todos: TodoInterface[];
}

export interface TodoItemInterface {
  handleTodoUpdate: (Name: string, id: string) => void;
  updateStateTodo: (Name: string, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoDone: (id: string, Done: boolean) => void;
  todo: TodoInterface;
}