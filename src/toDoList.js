import { useReducer } from "react";
import InputList from "./components/InputList";
import MonitorList from "./components/MonitorList";

function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: state.nextId, title: action.title, completed: false },
        ],
        nextId: state.nextId + 1,
      };
    case "toggle":
      return {
        ...state,
        todo: state.todo.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item,
        ),
      };
    case "delete":
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

function ToDoList() {
  const [{ todo }, dispatch] = useReducer(todoReducer, {
    todo: [],
    nextId: 0,
  });

  return (
    <>
      <InputList dispatch={dispatch} />
      <MonitorList todo={todo} dispatch={dispatch} />
    </>
  );
}

export default ToDoList;
