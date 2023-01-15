import { func, object } from "prop-types";
import { FiDownload, FiUpload, FiTrash } from "react-icons/fi";

import Box from "../../presentations/Box/Box";
import Button from "../../presentations/Button";
import Text from "../../presentations/Text/Text";

const DetailNote = ({
  note,
  handleDeleteNote,
  handleArchiveNote,
  handleUnarchivedNote,
}) => {
  const renderArchivedNote = note.archived ? (
    <Button
      className="action"
      type="button"
      title="Aktifkan"
      onClick={handleUnarchivedNote}
    >
      <FiUpload />
    </Button>
  ) : (
    <Button
      className="action"
      type="button"
      title="Arsipkan"
      onClick={handleArchiveNote}
    >
      <FiDownload />
    </Button>
  );

  return (
    <>
      <Text className="detail-page__createdAt">{note.createdAt}</Text>
      <Box className="detail-page__body">{note.body}</Box>
      <Box className="detail-page__action">
        {renderArchivedNote}
        <Button
          className="action"
          type="button"
          title="Hapus"
          onClick={handleDeleteNote}
        >
          <FiTrash />
        </Button>
      </Box>
    </>
  );
};

DetailNote.propTypes = {
  note: object,
  handleDeleteNote: func,
  handleArchiveNote: func,
  handleUnarchivedNote: func,
};

export default DetailNote;
