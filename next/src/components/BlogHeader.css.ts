import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const rootClass = style({
  margin: 0
});

export const headerContentClass = style({
  padding: vars.spaces.small
});

export const headerClass = style({
  fontSize: vars.fontSizes.large,
  margin: 0
});

export const dateClass = style({
  fontSize: "1.33rem",
  margin: 0
});

export const mainImageClass = style({});
