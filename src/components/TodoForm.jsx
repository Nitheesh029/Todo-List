import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useEffect, useState } from "react";
const TodoForm = () => {
  useGSAP(() => {
    gsap.from(".todoForm", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, {});
  return (
    <div className="mt-20 w-[600px] bg-white shadow-md rounded-xl flex gap-4 todoForm">
      <input
        type="text"
        className="w-full outline-none p-4 flex-1 rounded-xl"
        placeholder="Enter todo..."
      />
      <button className="outline-none border-none py-3 px-4 bg-indigo-500 rounded-r-xl text-white focus:ring-2 hover:bg-indigo-600 active:bg-indigo-700 transition-colors">
        Add <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoForm;
