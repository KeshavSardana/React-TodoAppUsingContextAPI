import React, { useState, useContext } from "react";
import {
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import { v4 } from "uuid";
import TodoContext from "../context/Todocontext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoString === "") {
      alert("Please enter a Todo");
    } else {
      const todo = {
        todoString,
        id: v4(),
      };
      dispatch({
        type: ADD_TODO,
        payload: todo,
      });

      setTodoString("");
    }
  };

  return (
    <FormGroup className="mt-5 mb-5">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Your next Todo"
            value={todoString}
            onChange={(e) => setTodoString(e.target.value)}
            style={{ fontSize: "20px" }}
          />
          <InputGroupAddon>
            <Button block color="warning" className="px-5 py-2">
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    </FormGroup>
  );
};

export default TodoForm;
