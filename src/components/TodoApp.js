import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import "./assets/css/TodoApp.css";

const TodoApp = () => {
  //   const initialTodos = [
  //     { id: 1, task: "Clean House" },
  //     { id: 2, task: "Wipe Ass" },
  //     { id: 3, task: "Make Noodles" },
  //   ];
  const initialTodos = JSON.parse(localStorage.getItem("todos"));

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText }]);
  };
  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };
  return (
    <div className="todo-app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
          )}
        />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
};

export default TodoApp;
