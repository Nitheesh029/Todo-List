import React, { useEffect, useState } from "react";
import { useTodo } from "../context/index.js";
import TodoItems from "./TodoItems.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CompletedTodo = () => {
  const { todos } = useTodo();
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.completed === true);
    setIsTodoEmpty(completedTodos.length === 0);
  }, [todos]);
  useGSAP(() => {
    gsap.from(".loading-animation", {
      y: 100,
      opacity: 0,
      duration: 0.75,
      ease: "power2.inOut",
    });
  }, {});
  return (
    <div className="w-[95%] mx-auto md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-10 rounded-xl shadow-lg md:p-4 p-1.5 flex flex-col gap-4 loading-animation">
      <p className="text-3xl font-semibold text-slate-600">Completed Todos</p>
      {isTodoEmpty ? (
        <p className="text-gray-500 text-center">
          👏 No completed tasks yet! Once you mark a task as done, it’ll show up
          here.
        </p>
      ) : (
        ""
      )}
      {todos
        .filter((todo) => todo.completed === true)
        .map((todo) => (
          <TodoItems todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default CompletedTodo;
