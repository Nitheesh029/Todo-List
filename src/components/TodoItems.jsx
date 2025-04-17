import React, { useState, useEffect } from "react";

import { Trash2 } from "lucide-react";
import { useTodo } from "../context";
const TodoItems = ({ todo }) => {
  const { deleteTodo, updateTodo, toggleCompleted } = useTodo();

  const [isEditable, setIsEditable] = useState(true);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(false);

  const edit = () => {
    setIsEditable(!isEditable);
    updateTodo(todo.id, { ...todo, todo: todoMsg });
  };

  return (
    <div
      className="border-2 bg-gray-500/10 text-black backdrop-blur-lg text-lg w-full px-4 py-2.5 flex items-center gap-2 rounded-md"
      key={todo.id}
    >
      <input
        type="checkbox"
        className="min-w-5 h-5 rounded-md cursor-pointer transition-all flex-shrink-0"
        checked={isCompleted}
        onChange={() => {
          toggleCompleted(todo.id);
          setIsCompleted(!isCompleted);
        }}
      />
      <input
        type="text"
        className={` bg-transparent px-2 outline-none truncate text-sm sm:text-base ${
          isCompleted ? "line-through" : ""
        }`}
        value={todoMsg}
        readOnly={isEditable}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
      />
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        <button
          className="hover:text-indigo-500 transition-colors p-1 flex-shrink-0"
          onClick={() => {
            deleteTodo(todo.id);
          }}
          aria-label="Delete todo"
        >
          <Trash2 size={18} />
        </button>
        <button
          onClick={edit}
          className="p-1 flex-shrink-0 hover:text-indigo-500 transition-colors"
          aria-label="Edit todo"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.862 4.487L18.549 2.799C18.9007 2.44733 19.3777 2.24976 19.875 2.24976C20.3723 2.24976 20.8493 2.44733 21.201 2.799C21.5527 3.15068 21.7502 3.62766 21.7502 4.125C21.7502 4.62234 21.5527 5.09932 21.201 5.451L7.636 19.016C7.1743 19.4778 6.61501 19.832 5.995 20.054L3 21L3.946 18.005C4.168 17.385 4.522 16.826 4.984 16.364L16.862 4.487Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 6L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
