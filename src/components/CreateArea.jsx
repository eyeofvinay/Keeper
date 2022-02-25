import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function deleteAll(event) {
    props.deleteAll();
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button title="Add this note" onClick={submitNote}>
          <MdOutlinePlaylistAdd size={23} />
        </button>
        <button
          title="Clear all the notes"
          onClick={deleteAll}
          className="delete-all"
        >
          <MdDeleteForever size={23} />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
