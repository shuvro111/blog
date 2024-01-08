export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  modules: ['@nuxt/ui', '@nuxtjs/prismic'],
  css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: 'shuvro',
  },
})