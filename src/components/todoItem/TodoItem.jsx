import React from "react";
import "./todoItem.style.css";

const TodoItem = ({ deleteTodo, todoId, text, isCompleted, completeTodo }) => {
  const onDeleteClick = () => {
    deleteTodo(todoId);
    console.log(todoId);
    console.log("is completed", isCompleted);
  };

  return (
    <div className="todoItem-container">
      <div className="todoList">
        <input
          type="checkbox"
          className="todo-checkbox"
          checked={isCompleted}
          onChange={() => completeTodo(todoId)}
        />
        <p
          style={{ textDecoration: `${isCompleted ? "line-through" : "none"}` }}
          className="todo-text"
        >
          {text}
        </p>
        <button id="x-btn" onClick={onDeleteClick}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
