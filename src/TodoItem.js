import React from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoil/atom";
import "./style.css";

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through",
  };
  const allTodoItem = useSetRecoilState(todoListState);
  const handleComplete = () => {
    allTodoItem((oldTodoList) => {
      return oldTodoList.map((todo) => {
        if (todo.id === props.item.id)
          return { ...todo, completed: !props.item.completed };
        return todo;
      });
    });
  };
  const handleDelete = () => {
    allTodoItem((oldTodoList) => {
      return oldTodoList.filter((todo) => {
        return todo.id !== props.item.id;
      });
    });
  };
  return (
    <div className="todo-item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={handleComplete}
        />
        <p style={props.item.completed ? completedStyle : null}>
          {props.item.name}
        </p>
      </div>
      <div className="outer" onClick={handleDelete}>
        <div className="inner">
          <label>Delete</label>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
