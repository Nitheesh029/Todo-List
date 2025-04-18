import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import ManageTodo from "./components/ManageTodo.jsx";
import CompletedTodo from "./components/CompletedTodo.jsx";
import PendingTodo from "./components/PendingTodo.jsx";
import Stats from "./components/Stats.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={"/"} element={<ManageTodo />} />
      <Route path={"/completed"} element={<CompletedTodo />} />
      <Route path={"/pending"} element={<PendingTodo />} />
      <Route path={"/stats"} element={<Stats />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
