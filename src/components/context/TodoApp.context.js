import React, {createContext, useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid";

export const TodoAppContext = createContext()

const TodoAppContextProvider = (props) => {
    const initialTodos = JSON.parse(localStorage.getItem("todos")) | [{task: "dddd", id: 1}];

    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTodoText) => {
        setTodos([...todos, {id: uuidv4(), task: newTodoText}]);
    };
    const deleteTodo = (todoId) => {
        const newTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(newTodos);
    };

    return <TodoAppContext.Provider value={{todos,addTodo,deleteTodo}}>{props.children}</TodoAppContext.Provider>
}

export default TodoAppContextProvider;