import { useNotes } from "../context/NoteContext";
import Message from "./Message";

function NoteStatus() {
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const uncompletedNotes = allNotes - completedNotes;
  if (!allNotes)
    return (
      <Message>
        <h1>No notes has already been added.</h1>
      </Message>
    );
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open <span>{uncompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
