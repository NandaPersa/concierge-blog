import React from "react";
import { Route, Routes as RoutesRRD } from "react-router-dom";

import Main from "./pages/Main";
import { Publication } from "./pages/Publication";
import Search from "./pages/Search";

export const Routes: React.FC = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Main />} />
      <Route path="/post" element={<Publication />} />
      <Route path="/search/:term" element={<Search />} />
    </RoutesRRD>
  );
};
