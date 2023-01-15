import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";

import Box from "../../presentations/Box/Box";
import Button from "../../presentations/Button";

import NoteForm from "../../components/NoteForm/NoteForm";

import { addNote } from "../../utils/local-data";

const Create = () => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleCreateNote = (event) => {
    event.preventDefault();

    const newNote = {
      title: input.title,
      body: input.body,
    };

    addNote(newNote);
    navigate("/");
  };

  return (
    <Box as="section" className="add-new-page">
      <NoteForm
        title={input.title}
        body={input.body}
        handleInputChange={handleInputChange}
      />
      <Box className="add-new-page__action">
        <Button
          className="action"
          type="submit"
          title="Simpan"
          onClick={handleCreateNote}
        >
          <FiCheck />
        </Button>
      </Box>
    </Box>
  );
};

export default Create;
