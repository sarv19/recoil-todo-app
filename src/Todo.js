import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { todoListState, todoListFilterState } from "./recoil/atom";
import "./style.css";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { filteredTodoListState } from "./recoil/selector";

const Todo = () => {
  const todoAllItem = useSetRecoilState(todoListState);
  //   const todoListAll = useRecoilValue(todoListState);
  const todoListAll = useRecoilValue(filteredTodoListState);
  const [inputValue, changeInputValue] = useState("");
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const handleChange = (e) => {
    changeInputValue(e.target.value);
  };
  const hanedleSubmit = () => {
    const getValue = inputValue.trim();
    if (getValue) {
      todoAllItem((oldTodoList) => {
        return [
          ...oldTodoList,
          {
            id: Math.random().toString(),
            name: getValue,
            completed: false,
          },
        ];
      });

      // reset input value
      changeInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      hanedleSubmit();
    }
  };
  const todoList = todoListAll.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };
  return (
    <div>
      <div
        style={{
          margin: "auto",
          width: "50%",
          display: "flex",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <input
          type="text"
          placeholder="Todo Item"
          name="item"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button className="btn" onClick={() => hanedleSubmit()}>
          Enter
        </button>
      </div>
      <select value={filter} onChange={updateFilter} className="select-css">
        <option value="Show All">Show All</option>
        <option value="Done">Done</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      <div className="todo-list">{todoList}</div>
    </div>
  );
};

export default Todo;
