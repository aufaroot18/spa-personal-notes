import { Link } from "react-router-dom";

import Heading from "../../presentations/Heading/Heading";

const Navigation = () => {
  return (
    <header>
      <Heading as="h1">
        <Link to="/">Aplikasi Catatan</Link>
      </Heading>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/notes/archive">Arsip</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
