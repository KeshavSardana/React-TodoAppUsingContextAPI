import React, { useContext } from "react";
import TodoContext from "../context/Todocontext";
import { ListGroup, ListGroupItem } from "reactstrap";
import TodoReducer from "../context/reducer";
import { REMOVE_TODO } from "../context/action.types";
import { FaCheckDouble } from "react-icons/fa";
import "../App.css";

const TodoDisplay = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const remove = (todo) => {
    dispatch({
      type: REMOVE_TODO,
      payload: todo.id,
    });
  };

  return (
    <ListGroup className="mt-5 mb-5 p-5">
      {todos.map((todo) => (
        <ListGroupItem
          key={todo.id}
          style={{ color: "black" }}
          className="animate"
        >
          <span style={{ fontWeight: "600", fontSize: "25px" }}>
            {todo.todoString}
            <FaCheckDouble
              onClick={() => remove(todo)}
              style={{ float: "right" }}
            />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default TodoDisplay;
