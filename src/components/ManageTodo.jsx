import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";
import { TodoProvider } from "../context";
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

  console.log(todos);
  return (
    <TodoProvider value={{ addTodo, updateTodo, deleteTodo, toggleCompleted }}>
      <div className="flex w-full h-screen items-center flex-col">
        <TodoForm />
        {/* <TodoItems /> */}
      </div>
    </TodoProvider>
  );
};

export default ManageTodo;
