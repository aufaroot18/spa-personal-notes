import { Link } from "react-router-dom";
import { object } from "prop-types";

import Box from "../../presentations/Box/Box";
import Heading from "../../presentations/Heading";
import Text from "../../presentations/Text/Text";

const NoteItem = ({ note }) => {
  return (
    <Box className="note-item">
      <Heading as="h3" className="note-item__title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </Heading>
      <Text className="note-item__createdAt">{note.createdAt}</Text>
      <Text className="note-item__body">{note.body}</Text>
    </Box>
  );
};

NoteItem.propTypes = {
  note: object,
};

export default NoteItem;
