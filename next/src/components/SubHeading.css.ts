import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const headingClass = style({
  marginTop: vars.spaces.medium,
  marginBottom: vars.spaces.small
});
