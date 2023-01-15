import { func, string } from "prop-types";

import Box from "../../presentations/Box/Box";
import { Input } from "../../presentations/Form";

const NoteForm = ({ title, body, handleInputChange }) => {
  return (
    <Box className="add-new-page__input">
      <Box>
        <Input
          className="add-new-page__input__title"
          name="title"
          type="text"
          placeholder="Judul"
          value={title}
          onChange={handleInputChange}
        />
      </Box>
      <Box>
        <Input
          className="add-new-page__input__body"
          name="body"
          type="text"
          placeholder="Isi"
          value={body}
          onChange={handleInputChange}
        />
      </Box>
    </Box>
  );
};

NoteForm.propTypes = {
  title: string,
  body: string,
  handleInputChange: func,
};

export default NoteForm;
