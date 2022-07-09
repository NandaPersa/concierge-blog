import React from "react";
import { ThemeProvider } from "styled-components";
import { PilotLoadingProvider } from "./hooks/usePilotLoading";
import Principal from "./pages/Main";
import { GlobalStyle } from "./Styles/Global";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <PilotLoadingProvider>
      <ThemeProvider theme={theme}>
        <Principal />
        <GlobalStyle />
      </ThemeProvider>
    </PilotLoadingProvider>
  );
};

export default App;
