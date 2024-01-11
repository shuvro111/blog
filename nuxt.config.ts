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
        class: 'antialiased font-sans dark:text-slate-500 dark:bg-slate-900 bg-slate-50',
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
  prismic: {
    endpoint: 'shuvro',
  },
})
