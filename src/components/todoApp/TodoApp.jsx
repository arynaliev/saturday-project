import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoApp.style.css";
import TodoItem from "../todoItem/TodoItem";
import Popup from "../popup/Popup";

const TodoApp = () => {
  const [todo, setTodo] = useState({ text: "", id: "", isCompleted: false });
  const [todoList, setTodoList] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const onInputChange = (e) => {
    setTodo({ ...todo, text: e.target.value, id: uuidv4() });
  };

  const onAddHandler = () => {
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, text: "" });
    console.log(todo, todoList);
  };

  const onDeleteHandler = (todoId) => {
    setTodoList([...todoList.filter((el) => el.id !== todoId)]);
  };

  const completeTodo = (id) => {
    setTodoList([
      ...todoList.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      ),
    ]);
  };

  const clearAllHandler = () => {
    setIsPopupVisible(true);
  };

  return (
    <div className="todoApp-container">
      <h1 style={{ color: "white" }}>Todo App 📋</h1>
      <div className="add-input-btn">
        <input
          id="todo-input"
          type="text"
          value={todo.text}
          placeholder="enter task todo..."
          onChange={onInputChange}
        />
        <button onClick={onAddHandler}>Add</button>
      </div>
      <div className="todo-list-box">
        {todoList.map((el, index) =>
          todoList[index].text ? (
            <div className="todoItem-box">
              <TodoItem
                deleteTodo={onDeleteHandler}
                isCompleted={el.isCompleted}
                completeTodo={completeTodo}
                todoId={el.id}
                text={el.text}
              />
            </div>
          ) : null
        )}
      </div>
      {todoList.map((el, index) =>
        todoList[index].text ? (
          <div>
            <button onClick={clearAllHandler}>Clear All</button>
          </div>
        ) : null
      )}
      {isPopupVisible ? <Popup /> : null}
    </div>
  );
};

export default TodoApp;
