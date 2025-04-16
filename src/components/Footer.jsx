import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bottom-0 fixed bg-gray-50 p-4 shadow-md flex flex-col gap-4">
      <div className="flex items-center w-full justify-center md:justify-between px-20">
        <div className="flex items-center text-lg font-bold gap-1 text-[#185abd]">
          <img src="todologo.png" alt="" width={30} />
          <p>Focus Todo</p>
        </div>
        <div className="md:flex items-center justify-evenly text-2xl gap-5 hidden">
          <i className="fa-brands fa-instagram cursor-pointer hover:text-indigo-600 transition-colors"></i>
          <i className="fa-brands fa-x-twitter cursor-pointer hover:text-indigo-600 transition-colors"></i>
          <i className="fa-brands fa-facebook cursor-pointer hover:text-indigo-600 transition-colors"></i>
          <i className="fa-brands fa-youtube cursor-pointer hover:text-indigo-600 transition-colors"></i>
          <i className="fa-brands fa-linkedin cursor-pointer hover:text-indigo-600 transition-colors"></i>
          <i className="fa-brands fa-github cursor-pointer hover:text-indigo-600 transition-colors"></i>
        </div>
      </div>
      <div className="text-center text-lg gray-500">
        &copy; {currentYear} Focus Todo. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
