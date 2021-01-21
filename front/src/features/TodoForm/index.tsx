// Import dependencies
import * as React from 'react';

// Import interfaces
import {TodoInterface, TodoFormInterface} from '../../models/Todo';

// Todo form component
const TodoForm = (props: TodoFormInterface) => {
  // Cria uma ref pro input
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Cria formState
  const [formState, setFormState] = React.useState('')

  // Lida com a alteração no input do todo
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Update form state with the text from input
    setFormState(event.target.value)
  }

  // Lida com o Enter no input do todo
  function handleInputEnter(event: React.KeyboardEvent) {
    // Checa se a tecla pressionada foi Enter
    if (event.key === 'Enter') {
      // Cria um novo todo Object
      const newTodo: TodoInterface = {
        id: "null",
        Name: formState,
        Done: false,
        Date: new Date()
      }

      // Cria novo item todo
      props.handleTodoCreate(newTodo)

      // Limpa o campo do input
      if (inputRef && inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        placeholder='Criar novo Todo'
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </div>
  )
}

export default TodoForm;