import { arrayOf, object } from "prop-types";

import Box from "../../presentations/Box/Box";

import EmptyNote from "../EmptyNote";
import NoteItem from "../NoteItem/";

const NoteList = ({ notes }) => {
  if (notes.length === 0) return <EmptyNote />;

  return (
    <Box as="section" className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </Box>
  );
};

NoteList.propTypes = {
  notes: arrayOf(object),
};

export default NoteList;
