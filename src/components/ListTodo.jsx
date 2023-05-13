import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import "../App.css";

const ListTodo = ({ tasks, setTasks }) => {
  const remove = (item) => {
    const tasksCopy = tasks.filter((i) => i !== item);
    setTasks([...tasksCopy]);
  };
  return (
    <div className="list w-75 h-75 d-flex flex-column align-items-start">
      {tasks.map((item) => (
        <div
          className="task w-100 d-flex justify-content-between p-1 "
          key={item}
        >
          {item}

          <CiSquareRemove onClick={() => remove(item)} className="fs-3" />
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
