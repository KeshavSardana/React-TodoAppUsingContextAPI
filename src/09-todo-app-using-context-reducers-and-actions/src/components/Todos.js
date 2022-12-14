import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";
import { ListGroup, ListGroupItem } from "reactstrap";
import { REMOVE_TODO } from "../context/action.types";
import { FaCheckDouble } from "react-icons/fa";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
            style={{ float: "right" }}
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id,
              });
            }}
          >
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
