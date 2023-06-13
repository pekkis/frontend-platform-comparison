import { vars } from "@/services/theme.css";
import { style } from "@vanilla-extract/css";

export const main = style({
  maxWidth: "1000px",
  marginBlock: vars.spaces.medium,
  marginInline: "auto"
});
