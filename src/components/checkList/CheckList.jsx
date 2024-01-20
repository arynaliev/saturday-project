import React, { useState } from "react";
import "./checkList.style.css";
import TodoItem from "../todoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";

const CheckList = () => {
  const [inputValue, setInputValue] = useState({
    text: "",
    id: "",
    isCompleted: false,
  });
  const [checkList, setCheckList] = useState([]);

  const onChangeHandler = (e) => {
    setInputValue({ text: e.target.value, id: "", isCompleted: false });
  };

  const onAddHandler = () => {
    setCheckList([...checkList, { ...inputValue, id: uuidv4() }]);
    setInputValue({ text: "", id: "" });
    console.log(checkList);
  };

  const deleteTodo = (id) => {
    setCheckList([...checkList.filter((el) => el.id !== id)]);
  };

  const completeTodo = (id) => {
    const newCheckList = checkList.map((el) =>
      el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
    );
    setCheckList([...newCheckList]);
  };

  return (
    <div className="checkList-container">
      <div className="add-todo">
        <input
          type="text"
          onChange={onChangeHandler}
          value={inputValue.text}
          placeholder="enter your task to do..."
        />
        <button className="plus-btn" onClick={onAddHandler}>
          +
        </button>
      </div>
      <div>
        {checkList.map((el, index) =>
          checkList[index].text ? (
            <TodoItem
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              text={el.text}
              id={el.id}
              isCompleted={el.isCompleted}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default CheckList;
