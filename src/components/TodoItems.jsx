import React from "react";
import dayjs from "dayjs";
const TodoItems = ({ todos }) => {
  const currentDate = dayjs().format("MMMM D, YYYY");

  return (
    <div className="w-[70%] md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white mt-10 max-h-[700px] overflow-y-auto h-[400px] rounded-xl shadow-lg p-4">
      <p className="text-gray-700 font-medium text-lg mb-4 flex items-center gap-2">
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md">
          {currentDate}
        </span>
      </p>
      <div className="border-2 bg-gray-500/10 text-black backdrop-blur-lg text-lg w-full px-4 py-2.5 flex items-center justify-between gap-3 rounded-md">
        <input
          type="checkbox"
          class="w-5 h-5 rounded-md cursor-pointer transition-all"
        />
        <p className="flex-1">Learn React</p>
        <button>
          <i class="fa-solid fa-trash hover:text-indigo-500 transition-colors"></i>
        </button>
        <button>
          <i class="fa-solid fa-pencil hover:text-indigo-500 transition-colors"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItems;
