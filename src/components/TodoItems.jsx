import React, { useState, useRef } from "react";
import { Trash2, Pen } from "lucide-react";
import { useTodo } from "../context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const TodoItems = ({ todo }) => {
  const { deleteTodo, updateTodo, toggleCompleted } = useTodo();
  const [isEditable, setIsEditable] = useState(true);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const itemRef = useRef();

  const edit = () => {
    if (!isCompleted) {
      setIsEditable(!isEditable);
      updateTodo(todo.id, { ...todo, todo: todoMsg });
    }
  };
  useGSAP(() => {
    gsap.fromTo(
      itemRef.current,
      { x: -100, opacity: 0, scale: 0.95 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.inOut",
      }
    );
  }, []);
  const handleDelete = () => {
    gsap.to(itemRef.current, {
      x: 100,
      opacity: 0,
      scale: 0.95,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => {
        deleteTodo(todo.id);
      },
    });
  };
  return (
    <div
      className="border-2 bg-gray-500/10 text-black backdrop-blur-lg text-lg w-full md:px-4 px-2 py-2.5 flex items-center gap-2 rounded-md"
      key={todo.id}
      ref={itemRef}
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
        className={` bg-transparent px-2 outline-none truncate text-sm sm:text-base flex-1 ${
          isCompleted ? "line-through" : ""
        } ${isEditable ? "" : "ring-2 ring-black"}`}
        value={todoMsg}
        readOnly={isEditable}
        onChange={(e) => {
          setTodoMsg(e.target.value);
        }}
      />
      <div className="flex items-center md:gap-3 gap-0.5">
        <button
          className="hover:text-indigo-500 transition-colors p-1 flex-shrink-0"
          onClick={handleDelete}
          ref={itemRef}
          aria-label="Delete todo"
        >
          <Trash2 className="md:size-[20px] size-[15px]" />
        </button>
        <button
          onClick={edit}
          className="p-1 flex-shrink-0 hover:text-indigo-500 transition-colors"
          aria-label="Edit todo"
        >
          <Pen className="md:size-[20px] size-[15px]" />
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
