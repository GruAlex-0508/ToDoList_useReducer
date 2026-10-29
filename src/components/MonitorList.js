function MonitorList({ todo, dispatch }) {
  function toggleTodo(id) {
    dispatch({ type: "toggle", id });
  }

  function deleteToDo(id) {
    dispatch({ type: "delete", id });
  }

  return (
    <ul className="toDo-list">
      {todo.map((toDo) => (
        <li
          className={`toDo-item${toDo.completed ? " checked" : ""}`}
          key={toDo.id}
        >
          <span className="toDo-text" onClick={() => toggleTodo(toDo.id)}>
            {toDo.title}
          </span>
          <button
            className="delete-button"
            type="button"
            onClick={() => deleteToDo(toDo.id)}
            aria-label={`Delete ${toDo.title}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

export default MonitorList;
