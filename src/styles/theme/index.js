import { colors } from "@mui/material";
import breakpoints from "./variables/breakpoints";
import createTypograpy from "./typography";

const constants = {
  black: "black",
  white: "white",
};

const theme = {
  breakpoints,
  palette: {
    mode: "light",
    background: {
      paper: "#FAA8A8",
      primary: "#FF5884",
      secondary: "#EBC0CB",
    },
    primary: {
      contrastText: "#ffffff",
      main: colors.common.black,
      warning: "#FB5E5E",
    },
    text: {
      primary: "#000000",
      secondary: "#8D8D8D",
    },
    common: {
      ...colors.common,
      white: colors.common.white,
      black: colors.common.black,
    },
    constants,
  },

  typography: createTypograpy(colors.common.black),
};

export { theme };
