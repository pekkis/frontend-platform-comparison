import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const baseClass = style({
  marginTop: 0,
  marginBottom: vars.spaces.medium,
  backgroundColor: vars.color.black,
  position: "sticky",
  top: 0,
  zIndex: 10000,
  padding: 0,
  boxShadow: `0px 1px 1px ${vars.color.black}`,
  color: vars.color.white
});

export const headerClass = style({
  margin: 0,
  fontSize: "1rem",
  // backgroundColor: "rgb(0, 0, 0)",
  display: "inline-block",
  padding: "0.5em",
  borderRadius: "5px",
  marginLeft: "1em"
});

export const headerLinkClass = style({
  color: "rgb(255, 255, 255)"
});

export const activeLinkClass = style({
  fontWeight: "bold"
});
