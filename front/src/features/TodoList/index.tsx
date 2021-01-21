// Import dependencies
import * as React from 'react'

// Import TodoItem
import TodoItem from './../TodoItem';

// Import interfaces
import { TodoListInterface } from '../../models/Todo';

// TodoList component
const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              updateStateTodo={props.updateStateTodo}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoDone={props.handleTodoDone}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList;