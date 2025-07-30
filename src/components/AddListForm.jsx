import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function AddListForm() {
  const [title, setTitle] = useState("");
  const { addList } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return;
    addList(trimmedTitle);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem" }}>
      <input
        type="text"
        placeholder="New list title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add List</button>
    </form>
  );
}

export default AddListForm;