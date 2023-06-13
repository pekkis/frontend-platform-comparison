import { style } from "@vanilla-extract/css";
import { vars } from "../services/theme.css";

export const baseClass = style({
  padding: `0 ${vars.spaces.small}`
});
