import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("html", {
  fontFamily: vars.font.body,
  fontWeight: vars.fontWeight.body,
  lineHeight: "1.5",
  margin: 0
});

globalStyle("html, body", {
  margin: 0,
  backgroundColor: "rgb(255, 255, 255)",
  fontSize: vars.fontSizes.base
});

globalStyle("a", {
  color: "rgb(0, 0, 0)"
});

export const root = style({
  backgroundColor: vars.color.white,
  color: "black",
  padding: 0
});
