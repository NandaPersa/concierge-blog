import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Principal from "./pages/Main";
import { Publication } from "./components/Publication";

export const Routes = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Route component={Principal} path="/" exact />
      <Route component={Publication} path="/publication" />
    </BrowserRouter>
  );
};
