import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const headingClass = style({
  fontSize: vars.fontSizes.large,
  marginTop: vars.spaces.medium,
  marginBottom: vars.spaces.small
});
