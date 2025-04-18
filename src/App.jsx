import React, { useState, useEffect } from "react";
import { Footer, TodoNavbar } from "./components";
import { Outlet } from "react-router";
import { TodoProvider } from "./context";
import dayjs from "dayjs";

const App = () => {
    const [todos, setTodos] = useState([]);
    const currentDate = dayjs().format("MMMM D, YYYY");

    const addTodo = (todo) => {
        setTodos((prev) => [
            { id: Date.now(), ...todo, date: currentDate },
            ...prev,
        ]);
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

    // Load todos from localStorage
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
            setTodos(storedTodos);
        }
    }, []);

    // Save todos to localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  return (
      <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}>
          <TodoNavbar />
          <Outlet />
          <Footer />
      </TodoProvider>
  );
};

export default App;
