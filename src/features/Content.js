import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Linkedin from "@assets/linkedin.svg";
import Link from "next/link";
const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Typography component="h1" variant="h1">
        Content title
      </Typography>{" "}
      <Typography component="p" variant="p">
        Just some text
      </Typography>
      <Link href="https://www.linkedin.com/in/marijavuco/">
        <a target="_blank">
          {" "}
          <Linkedin />
        </a>
      </Link>
    </div>
  );
};

export default Content;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3, 1.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
