import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const baseClass = style({
  marginTop: vars.spaces.mini,
  marginBottom: vars.spaces.medium,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

export const browserClass = style({
  fontSize: vars.fontSizes.large,
  alignSelf: "flex-start"
});

export const nonClickableClass = style({
  opacity: 0.5,
  cursor: "not-allowed"
});

export const clickableClass = style({
  opacity: 1,
  cursor: "pointer"
});

export const titleClass = style({
  paddingLeft: vars.spaces.small,
  paddingRight: vars.spaces.small
});
