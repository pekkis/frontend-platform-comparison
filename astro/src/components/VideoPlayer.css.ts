import { style } from "@vanilla-extract/css";

export const containerClass = style({
  position: "relative",
  width: "100%",
  aspectRatio: (16 / 9).toString()
});

export const innerClass = style({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
});
