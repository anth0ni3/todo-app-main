import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import InputForm from "./InputForm";
import { TodoAppContext } from "./context/TodoApp.context";
import "./assets/css/TodoList.css";

const TodoList = () => {
  const { todos, showAdd, toggleAdd } = useContext(TodoAppContext);

  return (
    <div>
      <div className="flexy sb">
        <h2 className="title">Reminders</h2>
        <div className="svg add" onClick={toggleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <title>Add new todo</title>
            <g fill="#111111">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
            </g>
          </svg>
        </div>
      </div>
      <div className="todo-scroll">
        {todos.length > 0
          ? todos.map(todo => (
              <TodoItem id={todo.id} key={todo.id} task={todo.task} />
            ))
          : !showAdd && <p className="flexy item">Add new todo</p>}
        {showAdd ? <InputForm /> : ""}
      </div>
    </div>
  );
};

export default TodoList;
