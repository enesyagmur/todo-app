import React from "react";

const ListTodo = ({ tasks }) => {
  return (
    <div>
      {tasks.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

export default ListTodo;
