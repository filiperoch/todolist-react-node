import React from 'react';
import TodoApp from '../features/Todo';
import './App.css';

function App() {

    /**
     * verificar se tem usuario logado no localStorage, se tiver tentar entrar tentar fazer
     * a request, se a request der errado redirecionar para a tela de login
     */

    return (
       <TodoApp/>
    );
}

export default App;
