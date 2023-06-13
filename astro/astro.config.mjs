import { defineConfig } from "astro/config";
import vanillaExtract from "astro-vanilla-extract";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [vanillaExtract(), react()]
});