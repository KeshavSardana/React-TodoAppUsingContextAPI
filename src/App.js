import react, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import TodoContext from "./context/Todocontext";
import TodoReducer from "./context/reducer";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoDisplay from "./components/TodoDisplay";

const App = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1>Todo App Using Context API</h1>
        <TodoDisplay />
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
