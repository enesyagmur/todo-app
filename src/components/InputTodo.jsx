import React, { useRef } from "react";

const InputTodo = ({ setTasks, tasks }) => {
  const input = useRef();

  const add = () => {
    setTasks([...tasks, input.current.value]);
    input.current.value = "";
  };

  return (
    <div>
      <input ref={input} type="text" />
      <button onClick={add}>+</button>
    </div>
  );
};

export default InputTodo;
