import React, {useContext} from "react";
import "./assets/css/InputForm.css";
import useInputState from "./hooks/useInputState";
import {TodoAppContext} from "./context/TodoApp.context";

const InputForm = () => {
    const {addTodo, setShowAdd} = useContext(TodoAppContext);
  const [value, handleChange, reset] = useInputState("");
  return (
    <div className="flexy relative">
      <input
        type="text"
        autoFocus
        className="fullinput"
        placeholder="New reminder..."
        value={value}
        onChange={handleChange}
      />
      <div className="svg">
        <svg
          onClick={() => {
            if (value !== "") {
              addTodo(value);
              setShowAdd(false);
              reset();
            }
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>Save Reminder</title>
          <g fill="#111111">
            <path d="M10 15.586l-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"/>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default InputForm;
