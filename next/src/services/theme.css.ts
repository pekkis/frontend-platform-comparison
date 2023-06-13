import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  spaces: {
    mini: "0.5rem",
    small: "1rem",
    medium: "2rem",
    grande: "3rem",
    grandeLusso: "4rem"
  },

  fontSizes: {
    base: "16px",
    normal: "1rem",
    medium: "1.5rem",
    large: "2rem"
  },

  color: {
    brand: "blue",
    white: "white",
    grey: "rgb(220 220 220)",
    black: "rgb(0 0 0)"
  },
  font: {
    body: "Merriweather"
  },

  fontWeight: {
    body: "400"
  }
});
