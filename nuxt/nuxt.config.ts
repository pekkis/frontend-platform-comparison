// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
  },
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys are only available on the server

    // Public keys that are exposed to the client
    public: {
      contentfulAccessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID as string,
    },
  },
});
