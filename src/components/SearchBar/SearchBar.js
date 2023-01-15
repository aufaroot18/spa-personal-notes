import { func, string } from "prop-types";

import Box from "../../presentations/Box/Box";
import { Input } from "../../presentations/Form";

const SearchBar = ({ keyword, handleKeyword }) => {
  return (
    <Box as="section" className="search-bar">
      <Input
        type="text"
        placeholder="Cari berdasarkan judul"
        value={keyword}
        onChange={handleKeyword}
      />
    </Box>
  );
};

SearchBar.propTypes = {
  keyword: string,
  handleKeyword: func,
};

export default SearchBar;
