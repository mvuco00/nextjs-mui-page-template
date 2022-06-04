import breakpoints from "./variables/breakpoints";

export default (textColor) => ({
  h1: {
    fontSize: 42,
    lineHeight: "72px",
    color: textColor,

    [`@media only screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: 52,
    },
  },

  h3: {
    fontSize: 19,
    lineHeight: "50px",
    color: textColor,

    [`@media only screen and (min-width: ${breakpoints.values.sm}px)`]: {
      fontSize: 24,
    },
  },

  p: {
    fontSize: 16,
    lineHeight: "24px",
  },

  body1: {
    fontSize: 16,
    lineHeight: "24px",
  },

  body2: {
    fontSize: 16,
    lineHeight: "24px",
  },
});
