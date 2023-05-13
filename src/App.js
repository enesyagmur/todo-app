import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const arr = [];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([...arr]);
  }, []);

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <div className="todo w-25 h-50 p-5 d-flex flex-column justify-content-center align-items-center border border-1 border-secondary rounded">
        <h1>To-Do</h1>
        <InputTodo setTasks={setTasks} tasks={tasks} />
        <ListTodo tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
