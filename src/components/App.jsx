import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ToggleTheme from "./ToggleTheme";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function deleteAll() {
    setNotes((prevNotes) => {
      return [];
    });
  }

  const [count, setCount] = useState(0);
  function toggleTheme() {
    if (count === 0) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    setCount((count + 1) % 2);
  }

  return (
    <div>
      <ToggleTheme onClick={toggleTheme} />
      <Header />
      <CreateArea onAdd={addNote} deleteAll={deleteAll} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
