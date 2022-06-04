import { CssBaseline } from "@mui/material";
import { theme } from "@styles/theme";
import { useEffect } from "react";
import GlobalStyles from "@styles/theme/globalStyles";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import "../src/styles/base.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const lightTheme = createTheme(theme);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
