import "./App.css";
import CheckList from "./components/checkList/CheckList";
import AddStar from "./components/starAdder/AddStar";
import TodoItem from "./components/todoItem/TodoItem";

function App() {
  return (
    <div className="App">
      <CheckList />
    </div>
  );
}

export default App;
