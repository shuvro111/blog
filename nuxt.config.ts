export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/prismic', '@nuxtjs/google-fonts', '@nuxt/image'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'h-full',
      },
      bodyAttrs: {
        class: 'antialiased font-sans text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900',
      },
    },
  },
  ui: {
    icons: ['heroicons', 'lucide'],
  },
  googleFonts: {
    families: {
      Manrope: [500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
  image: {
    format: ['webp'],
  },
  prismic: {
    endpoint: 'shuvro',
  },
})
