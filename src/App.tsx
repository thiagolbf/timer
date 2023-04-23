import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

import { GlobalSTyle } from "./styles/globa";

import { Router } from "./Router";

import { CyclesContextProvider } from "./contexts/CyclesContext";

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
        <GlobalSTyle />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
