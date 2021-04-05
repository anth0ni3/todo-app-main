import React, { useState } from "react";
import TodoList from "./TodoList";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import "./assets/css/TodoApp.css";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Clean House" },
    { id: 2, task: "Wipe Ass" },
    { id: 3, task: "Fuck Amaka" },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText }]);
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
