import React, {useEffect, useState} from "react";
import {useTodo} from "../context/index.js";
import TodoItems from "./TodoItems.jsx";

const PendingTodo = () => {
  const {todos} = useTodo();
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  useEffect(() => {
    setIsTodoEmpty(todos.length === 0);
  }, [todos]);
  return <div className="w-[95%] mx-auto md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-10 rounded-xl shadow-lg md:p-4 p-1.5 flex flex-col gap-4">
    <p className="text-3xl font-semibold text-slate-600">Pending Todos</p>
    {isTodoEmpty ? (
        <p className="text-gray-500 text-center">Add your todo in Manage Todo page...</p>
    ) : (
        ""
    )}
    {todos
        .filter((todo) => todo.completed === false)
        .map((todo) => (
            <TodoItems todo={todo} key={todo.id} />
        ))
    }
  </div>
};

export default PendingTodo;
