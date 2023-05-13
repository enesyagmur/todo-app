import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const arr = ["React çalışma", "İngilizce speak", "Spor"];

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks([...arr]);
  }, []);

  return (
    <div className="App">
      <div className="todo bg-danger">
        <InputTodo setTasks={setTasks} tasks={tasks} />
        <ListTodo tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  );
}

export default App;
