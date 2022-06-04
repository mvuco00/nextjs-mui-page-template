import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    "@global": {
      "*, *::after, *::before": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      html: {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
        height: "100%",
        width: "100%",
      },
      body: {
        backgroundColor: theme.palette.background.secondary,
        height: "100%",
        width: "auto",
      },

      a: {
        textDecoration: "none",
        color: "inherit",
      },
      "#root": {
        height: "100%",
        width: "100%",
      },
      "#__next": {
        minHeight: "100vh",
        position: "relative",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
