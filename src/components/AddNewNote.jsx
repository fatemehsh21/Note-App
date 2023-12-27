import { useState } from "react";
import { useNotesDispatch } from "../context/NoteContext";

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) return null;

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createAt: new Date().toISOString(),
    };
    dispatch({ type: "add", payload: newNote });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h1>New Note</h1>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          placeholder="Note title"
        />
        <input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="Note description..."
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
