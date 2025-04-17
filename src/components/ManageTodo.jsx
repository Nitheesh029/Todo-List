import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { TodoProvider } from "../context";
import dayjs from "dayjs";
const ManageTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...todo, todo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);

  useEffect(() => {
    setIsTodoEmpty(todos.length === 0);
  }, [todos]);
  const currentDate = dayjs().format("MMMM D, YYYY");
  console.log(todos);
  return (
    <TodoProvider
      value={{ addTodo, updateTodo, deleteTodo, toggleCompleted, todos }}
    >
      <div className="flex w-full h-screen items-center flex-col">
        <TodoForm />
        <div className="w-[70%] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-10 max-h-[700px] rounded-xl shadow-lg p-4 flex flex-col gap-2">
          <p className="text-gray-700 font-medium text-lg mb-4 flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md">
              {currentDate}
            </span>
          </p>
          {isTodoEmpty ? (
            <p className="text-gray-500 text-center">Add Your Todo...</p>
          ) : (
            ""
          )}
          {todos.map((todo) => (
            <TodoItems todo={todo} key={todo.id} />
          ))}
        </div>
      </div>
    </TodoProvider>
  );
};

export default ManageTodo;
