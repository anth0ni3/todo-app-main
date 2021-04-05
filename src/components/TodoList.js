import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputForm from "./InputForm";
import "./assets/css/TodoList.css";

const TodoList = ({ todos, addTodo, deleteTodo }) => {
  const [showAdd, setShowAdd] = useState(false);

  const toggleAdd = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div>
      <div className="flexy sb">
        <h1 className="title">Reminders</h1>
        <div className="svg add" onClick={toggleAdd}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>Add new todo</title>
            <g fill="#111111">
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              id={todo.id}
              key={todo.id}
              task={todo.task}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <p className="flexy item">Add new todo</p>
        )}
        {showAdd ? <InputForm addTodo={addTodo} setShowAdd={setShowAdd} /> : ""}
      </div>
    </div>
  );
};

export default TodoList;
