// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  routeRules: {
    "/**": {
      isr: 60 * 60 * 24,
    },
  }
})
