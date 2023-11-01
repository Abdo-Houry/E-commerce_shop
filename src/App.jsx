import { ColorModeContext, useMode } from "./theme";
import TopBar from "./components/header/TopBar";
import CenterBar from "./components/header/CenterBar";
import EndBar from "./components/header/EndBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}>
        <CssBaseline />
        <TopBar />
        <CenterBar />
        <EndBar />
        <Box bgcolor={theme.
          // @ts-ignore
          palette.bg.main}>
          <Hero />
          <Main />
          <Footer />
          <ScrollToTop />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;