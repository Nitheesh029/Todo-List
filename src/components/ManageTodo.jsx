import React from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
const ManageTodo = () => {
  return (
    <div className="flex w-full h-screen items-center flex-col">
      <TodoForm />
      <TodoItems />
    </div>
  );
};

export default ManageTodo;
