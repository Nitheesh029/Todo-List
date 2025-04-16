import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
import { useTodo } from "../context";
const TodoForm = () => {
  const [todoMsg, setTodoMsg] = useState("");
  const { addTodo } = useTodo();
  useGSAP(() => {
    gsap.from(".todoForm", {
      y: 100,
      opacity: 0,
      duration: 0.75,
      ease: "power2.inOut",
    });
  }, {});

  const add = (e) => {
    e.preventDefault();
    if (!todoMsg) return;
    addTodo({ todo: todoMsg, completed: false });
    setTodoMsg("");
  };
  return (
    <div className="mt-20 w-[80%] md:w-[600px] lg:w-[700px] xl:w-[800px] bg-white shadow-md rounded-xl flex gap-4 todoForm">
      <input
        type="text"
        className="w-full outline-none p-4 flex-1 rounded-xl"
        placeholder="Enter todo..."
        value={todoMsg}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
      />
      <button
        className="outline-none border-none py-3 px-4 bg-indigo-500 rounded-r-xl text-white focus:ring-2 hover:bg-indigo-600 active:bg-indigo-700 transition-colors"
        onClick={add}
      >
        Add <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoForm;
