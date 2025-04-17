import React, { useState, useEffect } from "react";

import { Trash2, pen } from "lucide-react";
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
      <div className="flex items-center gap-1">
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
          <pen />
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
