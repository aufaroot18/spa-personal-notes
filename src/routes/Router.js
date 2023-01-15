import { Routes, Route } from "react-router-dom";

import Index from "../pages/Notes/Home";
import Archive from "../pages/Notes/Archive";
import Create from "../pages/Notes/Create";
import Detail from "../pages/Notes/Detail";
import NotFoundPage from "../pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/notes" element={<Index />} />
      <Route path="/notes/new" element={<Create />} />
      <Route path="/notes/:id" element={<Detail />} />
      <Route path="/notes/archive" element={<Archive />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
