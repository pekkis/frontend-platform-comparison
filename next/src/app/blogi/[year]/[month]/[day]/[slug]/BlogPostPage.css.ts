import { vars } from "@/services/theme.css";
import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridTemplateAreas: `
  "content aside"
  `,
  gridTemplateColumns: "7fr 3fr",
  gap: vars.spaces.medium
});

export const aside = style({});

export const content = style({});
