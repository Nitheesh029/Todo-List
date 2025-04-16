import { useContext, createContext } from "react";
const TodoContext = createContext({
  todos: [{ id: 1, todo: "Learn React", date: Date.now, completed: false }],
  addTodo: (id, todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleted: (id) => {},
});

export const useTodo = () => {
  useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
