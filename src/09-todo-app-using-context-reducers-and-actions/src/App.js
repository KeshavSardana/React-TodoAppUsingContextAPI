import React, { useReducer } from "react";
import { Container } from "reactstrap";
import TodoContext from "./context/TodoContext";
import TodoReducer from "./context/reducer";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  // this dispatch is gonna holding multiple things like payload and action and evrything

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
}

export default App;
