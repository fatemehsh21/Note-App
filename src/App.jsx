import "./App.css";
import { useState } from "react";
import AddNewNote from "./components/AddNewNote";
import NoteList from "./components/NoteList";
import NoteStatus from "./components/NoteStatus";
import NoteHeader from "./components/NoteHeader";
import { NotesProvider } from "./context/NoteContext";

function App() {
  // const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  // const handleAddNotes = (newNote) => {
  // setNotes((prevNotes) => [...prevNotes, newNote]);
  //   dispatch({ type: "add", payload: newNote });
  // };

  // const handleDeleteNote = (id) => {
  // const filteredNotes = notes.filter((n) => n.id !== id);
  // setNotes(filteredNotes);
  //   dispatch({ type: "delete", payload: id });
  // };
  // const handleCompleteNote = (e) => {
  //   const id = Number(e.target.value);
  // setNotes((prevNotes) =>
  //   prevNotes.map((note) =>
  //     note.id === id ? { ...note, completed: !note.completed } : note
  //   )
  // );
  //   dispatch({ type: "complete", payload: id });
  // };

  return (
    <NotesProvider>
      <div className="container">
        <NoteHeader sortBy={sortBy} onSort={(e) => setSortBy(e.target.value)} />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
