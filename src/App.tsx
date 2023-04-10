import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { ButtonContainer } from "./components/Button/style";

import { GlobalSTyle } from "./styles/globa";

import { useState } from "react";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ButtonContainer variant="primary"></ButtonContainer>

      <GlobalSTyle />
    </ThemeProvider>
  );
};

export default App;
