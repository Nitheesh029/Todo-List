import React, { useState } from "react";

function TodoNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const menus = [
    {
      id: 1,
      title: "Manage Todos",
    },
    {
      id: 2,
      title: "Completed",
    },
    {
      id: 3,
      title: "Pending",
    },
  ];
  return (
    <div className="w-full py-4 shadow-xl bg-white flex items-center justify-evenly relative">
      <div className="flex gap-1 items-center text-2xl md:text-3xl text-[#185abd] font-bold cursor-pointer">
        <img src="todologo.png" alt="" className="md:w-[40px] w-[30px]" />
        <p>Focus Todo</p>
      </div>
      <div className="hidden md:flex gap-7">
        {menus.map((menu) => (
          <a
            href="#"
            className="cursor-pointer nav-link text-lg relative"
            key={menu.id}
          >
            {menu.title}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="cursor-pointer"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        {showMenu && (
          <div className="flex gap-10 py-3 absolute right-0 top-[65px] bg-white w-full justify-center border-t-2 border-slate-300">
            {menus.map((menu) => (
              <a
                href="#"
                className="cursor-pointer text-lg relative hover:text-indigo-700 transition-colors text-slate-600 font-semibold"
                key={menu.id}
              >
                {menu.title}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TodoNavbar;
