import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Routes } from "./routes";
import { GlobalStyle } from "./Styles/Global";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
