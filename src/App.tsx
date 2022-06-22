import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PilotLoadingProvider } from "./hooks/usePilotLoading";
import Principal from "./pages/Main";
import Header from "./components/Header";
import { Routes } from "./routes";
import { GlobalStyle } from "./Styles/Global";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <PilotLoadingProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes />
        </ThemeProvider>
      </PilotLoadingProvider>
    </BrowserRouter>
  );
};

export default App;
