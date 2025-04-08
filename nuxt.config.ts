// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "nuxt-viewport",
    // Add other modules here
    "@vueuse/nuxt",
    "@nuxtjs/seo",
  ],

  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET || "your-secret-key",
  },

  shadcn: {
    /**
     * Prefix for all imported components.
     * This prefix is appended to the names of components imported via shadcn-nuxt.
     * Set an empty string to disable the prefix.
     */
    prefix: "",
    /**
     * Directory where the UI components are located.
     * Default is "./components/ui".
     * Change this path if you modify the folder structure.
     */
    componentDir: "./components/ui",
  },
});
