const META_TITLE = "";
const META_DESC = "";

export default defineNuxtConfig({
  // ssr: false,
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: META_DESC },
        { hid: "og:title", property: "og:title", content: META_TITLE },
        {
          hid: "og:image",
          property: "og:image",
          content: "/og_me.png",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: META_DESC,
        },
        { hid: "twitter:title", name: "twitter:title", content: META_TITLE },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: META_DESC,
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
    "@nuxtjs/supabase",
    "nuxt-icon",
  ],
  googleFonts: {
    families: {
      "Space+Grotesk": true,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
  runtimeConfig: {
    supabaseUrl: process.env.SUPABASE_URL,
    supabaseAnon: process.env.SUPABASE_KEY,
    public: {
      apiBase: "/api",
    },
  },
});
