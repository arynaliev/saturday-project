import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todoApp.style.css";
import TodoItem from "../todoItem/TodoItem";

const TodoApp = () => {
  const [todo, setTodo] = useState({ text: "", id: "", isCompleted: false });
  const [todoList, setTodoList] = useState([]);

  const onInputChange = (e) => {
    setTodo({ ...todo, text: e.target.value, id: uuidv4() });
  };

  const onAddHandler = () => {
    setTodoList([...todoList, todo]);
    setTodo({ ...todo, text: "" });
    console.log(todo, todoList);
  };

  const onDeleteHandler = (todoId) => {
    setTodoList([...todoList.filter((el, id) => el.id !== todoId)]);
  };

  const completeTodo = (id) => {
    setTodoList([
      ...todoList.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      ),
    ]);
  };

  return (
    <div className="todoApp-container">
      <div>
        <input
          type="text"
          value={todo.text}
          placeholder="enter task todo..."
          onChange={onInputChange}
        />
        <button onClick={onAddHandler}>+</button>
      </div>
      <div>
        {todoList.map((el, index) =>
          todoList[index].text ? (
            <TodoItem
              deleteTodo={onDeleteHandler}
              isCompleted={el.isCompleted}
              completeTodo={completeTodo}
              todoId={el.id}
              text={el.text}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default TodoApp;
