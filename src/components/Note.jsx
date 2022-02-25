import React from "react";
import { FaTrash } from "react-icons/fa";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button title="Delete this note" onClick={handleClick}>
        <FaTrash size={20} />
      </button>
    </div>
  );
}

export default Note;
