import React from "react";
import { ThemeProvider } from "styled-components";
import Principal from "./pages/Main";
import { GlobalStyle } from "./Styles/Global";
import theme from "./Styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Principal />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
