import React from "react";
import { CiSquareRemove } from "react-icons/ci";

const ListTodo = ({ tasks, setTasks }) => {
  const remove = (item) => {
    const tasksCopy = tasks.filter((i) => i !== item);
    setTasks([...tasksCopy]);
  };
  return (
    <div>
      {tasks.map((item) => (
        <li key={item}>
          {item}

          <CiSquareRemove onClick={() => remove(item)} />
        </li>
      ))}
    </div>
  );
};

export default ListTodo;
