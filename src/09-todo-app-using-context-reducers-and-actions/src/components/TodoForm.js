import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import TodoReducer from "../context/reducer";
import { ADD_TODO } from "../context/action.types";
import { v4 } from "uuid";
import {
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      alert("Please Enter a Todo");
    }

    const todo = {
      todoString,
      id: v4(),
    };

    dispatch({
      type: ADD_TODO,
      payload: todo,
    });

    setTodoString("");
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      <Form>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="warning">Add</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </FormGroup>
  );
};

export default TodoForm;
