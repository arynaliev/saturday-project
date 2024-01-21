import "./App.css";
import CheckList from "./components/checkList/CheckList";
import AddStar from "./components/starAdder/AddStar";
import TodoApp from "./components/todoApp/TodoApp";
import TodoItem from "./components/todoItem/TodoItem";

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;
