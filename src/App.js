import React from "react"
import "./App.css";
import AppNav from "./components/AppNav";
import TodoApp from "./components/TodoApp";
import TodoAppContextProvider from "./components/context/TodoApp.context";

function App() {
  return (
    <div className="App">
      <AppNav />
      <TodoAppContextProvider>
          <TodoApp />
      </TodoAppContextProvider>

    </div>
  );
}

export default App;
