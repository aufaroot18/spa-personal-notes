import { useState } from "react";

import Heading from "../../presentations/Heading";
import Box from "../../presentations/Box/Box";

import NoteList from "../../components/NoteList/NoteList";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getArchivedNotes, searchNotes } from "../../utils/local-data";

const Archive = () => {
  const [archivedNotes, ,] = useState(() => getArchivedNotes());
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const notes = searchNotes(archivedNotes, keyword);

  return (
    <Box as="section" className="archives-page">
      <Heading as="h2">Catatan Arsip</Heading>
      <SearchBar keyword={keyword} handleKeyword={handleKeyword} />
      <NoteList notes={notes} />
    </Box>
  );
};

export default Archive;
