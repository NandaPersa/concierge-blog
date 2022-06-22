import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Principal from "./pages/Main";
import { Routes } from "./routes";
import { GlobalStyle } from "./Styles/Global";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Principal />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
