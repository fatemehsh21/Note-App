import { useNotes, useNotesDispatch } from "../context/NoteContext";

function NoteList({ sortBy }) {
  const notes = useNotes();
  let sortedNotes = notes;
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  }
  if (sortBy === "earliest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }
  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note }) {
  const dispatch = useNotesDispatch();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={note.id}
            id={note.id}
            value={note.id}
            onChange={(e) => {
              const id = Number(e.target.value);
              dispatch({ type: "complete", payload: id });
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createAt).toLocaleDateString("en-US", options)}
      </div>
    </div>
  );
}
