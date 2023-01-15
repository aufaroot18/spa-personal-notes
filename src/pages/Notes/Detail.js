import { useNavigate, useParams } from "react-router-dom";

import Heading from "../../presentations/Heading";
import Box from "../../presentations/Box/Box";

import DetailNote from "../../components/DetailNote/DetailNote";

import NotFoundPage from "../NotFound";

import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../../utils/local-data";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) return <NotFoundPage />;

  const handleArchiveNote = () => {
    archiveNote(id);
    navigate("/");
  };

  const handleUnarchivedNote = () => {
    unarchiveNote(id);
    navigate("/");
  };

  const handleDeleteNote = () => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <Box as="section" className="detail-page">
      <Heading as="h3" className="detail-page__title">
        {note.title}
      </Heading>
      <DetailNote
        note={note}
        handleDeleteNote={handleDeleteNote}
        handleArchiveNote={handleArchiveNote}
        handleUnarchivedNote={handleUnarchivedNote}
      />
    </Box>
  );
};

export default Detail;
