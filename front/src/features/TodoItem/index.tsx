// Import dependencies
import * as React from 'react'
import baseAPI from './../../api/baseAPI';

// Import interfaces
import { TodoItemInterface } from '../../models/Todo';
import { FunctionsTwoTone } from '@material-ui/icons';

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {

  // formState
  const [formState, setFormState] = React.useState('');

  // Lida com a alteração do input
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Atualiza o formState com o atual valor do input
    setFormState(event.target.value);

    // Atualiza o todoState com o valor atual do input
    props.updateStateTodo(event.target.value, props.todo.id);
  }

  function handleInputEnter(event: React.KeyboardEvent) {
    // Checa se a tecla pressionada foi Enter
    if (event.key === 'Enter') {
      props.handleTodoUpdate(formState, props.todo.id);
    }
  }

  // Falha na implementação (bugs quando o input perde o foco)
  function handleOnBlur(event: React.ChangeEvent<HTMLInputElement>) {
    props.handleTodoUpdate(formState, props.todo.id)
  }

  return (
    <div className='todo-item'>
      <div onClick={() => props.handleTodoDone(props.todo.id, props.todo.Done)}>
      {(props.todo.Done) ? (<span className="todo-item-checked">✔</span>) : (<span className="todo-item-unchecked" />)}
      </div>

      <div className="todo-item-input-wrapper">
        <input
          value={props.todo.Name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event)}
          onKeyPress={event => handleInputEnter(event)}
        />
      </div>

      <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
        ⨯
      </div>
    </div>
  )
}

export default TodoItem;