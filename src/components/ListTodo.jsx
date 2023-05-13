import React from "react";

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
          <button onClick={() => remove(item)}>-</button>
        </li>
      ))}
    </div>
  );
};

export default ListTodo;
