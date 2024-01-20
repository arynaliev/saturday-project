import React from "react";
import "./todoItem.style.css";

const TodoItem = ({ deleteTodo, id, text, isCompleted, completeTodo }) => {
  const onDeleteClick = () => {
    deleteTodo(id);
    console.log(id);
    console.log("is completed", isCompleted);
  };

  return (
    <div className="todo-container">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={isCompleted}
        onChange={() => completeTodo(id)}
      />
      <p
        style={{ textDecoration: `${isCompleted ? "line-through" : null}` }}
        className="todo-text"
      >
        {text}
      </p>
      <button id="x-btn" onClick={onDeleteClick}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
