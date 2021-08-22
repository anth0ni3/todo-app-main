import React from "react";
import TodoList from "./TodoList";
import About from "./About";
import { Switch, Route } from "react-router-dom";
import "./assets/css/TodoApp.css";


const TodoApp = () => {
  return (
    <div className="todo-app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <TodoList />
          )}
        />
        <Route exact path="/about" render={() => <About />} />
      </Switch>
    </div>
  );
};

export default TodoApp;
