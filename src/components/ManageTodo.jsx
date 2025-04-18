import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { useTodo } from "../context";
import dayjs from "dayjs";

const ManageTodo = () => {
  const { todos } = useTodo();
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);
  const currentDate = dayjs().format("MMMM D, YYYY");

  useEffect(() => {
    setIsTodoEmpty(todos.length === 0);
  }, [todos]);

  const todaysTodos = todos.filter((todo) => todo.date === currentDate);

  return (
    <div className="flex w-full h-screen items-center flex-col">
      <TodoForm />
      <div className="w-[95%] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-10 max-h-[700px] rounded-xl shadow-lg md:p-4 p-1.5 flex flex-col gap-2">
        <p className="text-gray-700 font-medium text-lg mb-4 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md">
            {currentDate}
          </span>
        </p>
        {isTodoEmpty ? (
          <p className="text-gray-500 text-center">
            📝 It’s time to add your first task! Start by creating a new todo in
            this page.
          </p>
        ) : (
          ""
        )}
        {todaysTodos.map((todo) => (
          <TodoItems todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default ManageTodo;
