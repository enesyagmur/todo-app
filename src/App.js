import { useEffect, useState } from "react";
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
      <InputTodo setTasks={setTasks} tasks={tasks} />
      <ListTodo tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
