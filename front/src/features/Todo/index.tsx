// import dependencies
import React, { useState, useCallback, useEffect } from 'react';
import baseAPI from './../../api/baseAPI';

// Import components
import TodoForm from './../TodoForm';
import TodoList from './../TodoList';

// Import interfaces
import { TodoInterface } from './../../models/Todo';

// Import styles
import './index.css';
import { updateIndexedAccessTypeNode } from 'typescript';
import { ApiContext } from '@material-ui/data-grid';
import { responsiveFontSizes } from '@material-ui/core';


// TodoListApp component
// ....
const TodoApp = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([]);
    const api = baseAPI();

    const getTodosIndex = async () => {
        try {
            const apiResponse = await api.get('/todo');
            if (apiResponse.status === 200) {
                setTodos(apiResponse.data);

                return {
                    status: true,
                    data: apiResponse.data
                };
            }

            return {
                status: false,
                data: apiResponse.data
            };
        } catch (error) {
            if (error.response.data) {
                return {
                    status: false,
                    data: error.response.data
                };
            }
            throw error;
        }
    };

    window.onload = getTodosIndex;

    // Criando novo Item Todo
    async function handleTodoCreate(todo: TodoInterface) {

        // Faz alterações no todoState
        const newTodosState: TodoInterface[] = [...todos];
        newTodosState.push(todo);
        setTodos(newTodosState);

        // Faz a requisição para criar um novo todo no banco.
        try {
            const apiResponse = await api.post('/todo/create', todo);

            if (apiResponse.status === 200) {
                return {
                    status: true,
                    data: apiResponse.data
                };
            }

            return {
                status: false,
                data: apiResponse.data
            };
        } catch (error) {
            if (error.response.data) {
                return {
                    status: false,
                    data: error.response.data
                };
            }

            throw error;
        }
    }

    function updateStateTodo(Name: string, id: string) {

        // Faz alterações no todoState
        const newTodosState: TodoInterface[] = [...todos];
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.Name = Name;
        setTodos(newTodosState);

    }

    // Requisição para atualizar um todo existente
    async function handleTodoUpdate(Name: string, id: string) {
        
        updateStateTodo(Name, id);

        try {
            const updateTodo = { id: id, Name: Name };
            const apiResponse = await api.put('/todo/update', updateTodo);

            if (apiResponse.status === 200) {
                return {
                    status: true,
                    data: apiResponse.data
                };
            }

            return {
                status: false,
                data: apiResponse.data
            };
        } catch (error) {
            if (error.response.data) {
                return {
                    status: false,
                    data: error.response.data
                };
            }

            throw error;
        }
    }

    // Faz requisição para remover um todo
    async function handleTodoRemove(id: string) {

        // Faz alterações no todoState
        const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);
        setTodos(newTodosState);

        try {
            const apiResponse = await api.delete('/todo/delete', { params: { id: id } });

            if (apiResponse.status === 200) {
                return {
                    status: true,
                    data: apiResponse.data
                };
            }

            return {
                status: false,
                data: apiResponse.data
            };
        } catch (error) {
            if (error.response.data) {
                return {
                    status: false,
                    data: error.response.data
                };
            }

            throw error;
        }
    }

    // Faz requisição para marcar um todo como Done
    async function handleTodoDone(id: string, Done: boolean) {

        // Faz alterações no todoState
        const newTodosState: TodoInterface[] = [...todos];
        
        newTodosState.find((todo: TodoInterface) => todo.id === id)!.Done = !newTodosState.find(
            (todo: TodoInterface) => todo.id === id
        )!.Done;

        setTodos(newTodosState);

        try {
            const doneTodo = { id: id, Done: !Done };
            const apiResponse = await api.put('/todo/done', doneTodo);

            if (apiResponse.status === 200) {
                return {
                    status: true,
                    data: apiResponse.data
                };
            }

            return {
                status: false,
                data: apiResponse.data
            };
        } catch (error) {
            if (error.response.data) {
                return {
                    status: false,
                    data: error.response.data
                };
            }

            throw error;
        }
    }

    return (
        <div className="todo-list-app">
            <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />

            <TodoList
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                updateStateTodo={updateStateTodo}
                handleTodoRemove={handleTodoRemove}
                handleTodoDone={handleTodoDone}
            />

            <button type="button" onClick={getTodosIndex}>
                Atualizar
            </button>
        </div>
    );
};

export default TodoApp;
