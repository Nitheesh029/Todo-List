import React, { useEffect, useState } from "react";
import { useTodo } from "../context/index.js";
import TodoItems from "./TodoItems.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PendingTodo = () => {
  const { todos } = useTodo();
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  useEffect(() => {
    const pendingTodos = todos.filter((todo) => todo.completed === false);
    setIsTodoEmpty(pendingTodos.length === 0);
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
    <div className="w-[95%] mx-auto md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-20 rounded-xl shadow-lg md:p-4 p-1.5 flex flex-col gap-4 loading-animation">
      <p className="text-3xl font-semibold text-slate-600">Pending Todos</p>
      {isTodoEmpty ? (
        <p className="text-gray-500 text-center">
          🎉 You're all caught up! No pending todos left. Add more tasks in the
          "Manage Todo" page.
        </p>
      ) : (
        ""
      )}
      {todos
        .filter((todo) => todo.completed === false)
        .map((todo) => (
          <TodoItems todo={todo} key={todo.id} />
        ))}
    </div>
  );
};

export default PendingTodo;
