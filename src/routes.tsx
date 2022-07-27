import React from "react";
import { Route, Routes as RoutesRRD } from "react-router-dom";

import Main from "./pages/Main";
import { Publication } from "./pages/Publication";

export const Routes: React.FC = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Main />} />
      <Route path="/post/:id" element={<Publication />} />
    </RoutesRRD>
  );
};
