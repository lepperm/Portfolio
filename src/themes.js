/**
 * @fileoverview Material-UI theme for project
 */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const colors = {
  PRIMARY: "#F3E9D2", // Champagne
  PRIMARY_CONTRAST: "#E4CFAC", // Wheat
  PRIMARY_LIGHT: "#FFFFFF", // White
  SECONDARY: "#88D498", // Granny Smith Apple
  SECONDARY_CONTRAST: "#1A936F", // Illuminating Emerald
  SECONDARY_LIGHT: "#C6DABF", // Tea Green
  ERROR: "#ED6A5A", // Terra Cotta
  BACKGROUND: "#1C1C1C", // Eerie Black
};

export const siteTheme = responsiveFontSizes(
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          section: {
            padding: "5em 1em 5em 1em",
            display: "flex",
            flexFlow: "column",
            alignItems: "stretch",
          },
        },
      },
    },
    palette: {
      type: "dark",
      primary: {
        main: colors.PRIMARY,
        contrastText: colors.PRIMARY_CONTRAST,
      },
      secondary: {
        main: colors.SECONDARY,
        contrastText: colors.SECONDARY_CONTRAST,
      },
      error: {
        main: colors.ERROR,
      },
      text: {
        primary: colors.PRIMARY,
        secondary: colors.SECONDARY,
      },
      background: {
        default: colors.BACKGROUND,
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
    },
    typography: {
      h1: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
        fontWeight: "bold",
      },
      h2: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      h3: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      h4: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      h5: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      h6: {
        fontFamily: [
          "Ubuntu",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      subtitle1: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      subtitle2: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      body1: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      body2: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      button: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      caption: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
      overline: {
        fontFamily: [
          "Poppins",
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(","),
      },
    },
  })
);
