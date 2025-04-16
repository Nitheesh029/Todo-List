import React from "react";
import { Footer, TodoNavbar } from "./components";
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <TodoNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
