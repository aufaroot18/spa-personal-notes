import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import Heading from "../../presentations/Heading";
import Button from "../../presentations/Button/";
import Box from "../../presentations/Box/Box";

import NoteList from "../../components/NoteList/NoteList";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getActiveNotes, searchNotes } from "../../utils/local-data";

const Home = () => {
  const [activeNotes, ,] = useState(() => getActiveNotes());
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleCreateNote = () => {
    navigate("/notes/new");
  };

  const notes = searchNotes(activeNotes, keyword);

  return (
    <Box as="section" className="homepage">
      <Heading as="h2">Catatan Aktif</Heading>
      <SearchBar keyword={keyword} handleKeyword={handleKeyword} />
      <NoteList notes={notes} />
      <Box className="homepage__action">
        <Button className="action" title="Tambah" onClick={handleCreateNote}>
          <FiPlus />
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
