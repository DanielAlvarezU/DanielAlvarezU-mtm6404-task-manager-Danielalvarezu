import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { Link } from "react-router-dom";

function ListSelector() {
  const { lists, deleteList } = useContext(TaskContext);

  if (lists.length === 0) return <p style={{ margin: "1rem" }}>No lists created.</p>;

  return (
    <div style={{ margin: "1rem" }}>
      <h3>Your Lists</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {lists.map((list) => (
          <li key={list.id} style={{ marginBottom: "0.5rem" }}>
            <Link to={`/lists/${list.id}`} style={{ marginRight: "1rem" }}>
              {list.title}
            </Link>
            <button
              onClick={() => deleteList(list.id)}
              style={{
                background: "transparent",
                border: "none",
                color: "red",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              aria-label={`Delete list ${list.title}`}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListSelector;

