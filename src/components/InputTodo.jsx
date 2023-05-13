import React, { useRef } from "react";
import { GrAddCircle } from "react-icons/gr";

const InputTodo = ({ setTasks, tasks }) => {
  const input = useRef();

  const add = () => {
    setTasks([...tasks, input.current.value]);
    input.current.value = "";
  };

  return (
    <div>
      <input ref={input} type="text" />
      <GrAddCircle onClick={add} />
    </div>
  );
};

export default InputTodo;
