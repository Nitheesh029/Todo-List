import React from "react";
import { useTodo } from "../context";

const Stats = () => {
  const { todos } = useTodo();
  const completedTodo = todos.filter((todo) => todo.completed === true);
  const pendingTodo = todos.filter((todo) => todo.completed === false);
  return <div>Stats</div>;
};

export default Stats;
