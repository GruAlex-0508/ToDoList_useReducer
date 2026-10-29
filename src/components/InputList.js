import { useState } from "react";

function InputList({ dispatch }) {
  const [value, setValue] = useState("");

  function handleAddToDo(event) {
    event.preventDefault();
    const input = value.trim();
    if (input) {
      dispatch({ type: "add", title: input });
      setValue("");
    }
  }

  function handleInputChange(event) {
    setValue(event.target.value);
  }

  return (
    <div id="myDIV" className="header">
      <h2>My To Do List</h2>
      <form className="form" onSubmit={handleAddToDo}>
        <input
          className="input"
          type="text"
          id="myInput"
          value={value}
          onChange={handleInputChange}
          placeholder="Title..."
        />
        <button className="addBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputList;
