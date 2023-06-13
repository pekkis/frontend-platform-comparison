import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const baseClass = style({
  margin: 0
});

export const listClass = style({
  listStyle: "none",
  margin: 0,
  padding: 0
});

export const postClass = style({
  borderCollapse: "collapse",
  borderBottom: `1px solid ${vars.color.grey}`,
  marginTop: vars.spaces.small,
  marginBottom: vars.spaces.small
});

export const headerClass = style({
  margin: 0
});

export const dateClass = style({
  fontSize: "1rem",
  margin: 0
});
