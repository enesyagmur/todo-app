import React, { useRef } from "react";
import { GrAddCircle } from "react-icons/gr";

import "../App.css";

const InputTodo = ({ setTasks, tasks }) => {
  const input = useRef();

  const add = () => {
    if (input.current.value) {
      setTasks([...tasks, input.current.value]);
      input.current.placeholder = "";
    }
  };

  return (
    <div className="d-flex w-100 justify-content-evenly  mb-3">
      <input ref={input} type="text" className="rounded border-light w-75" />
      <GrAddCircle onClick={add} id="plus" className="plus fs-2" />
    </div>
  );
};

export default InputTodo;
