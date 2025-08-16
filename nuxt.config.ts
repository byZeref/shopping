// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
  ],
  css: ["@/assets/css/main.css"],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    // redirectOptions: {
    //   login: '/auth',
    //   callback: '/',
    //   include: ['/admin'],
    //   exclude: ['/', '/products', '/cart', '/contact'],
    //   cookieRedirect: false,
    // }
  },
  app: {
    head: {
      title: 'Shopping App',
      meta: [
        { name: 'theme-color', content: process.env.PROJECT_PRIMARY_COLOR },
        { name: 'description', content: 'Tienda de productos fitness y accesorios para el gym' },
        { property: 'og:title', content: 'Shopping App' },
        { property: 'og:description', content: 'Tienda de productos fitness y accesorios para el gym' },
        // TODO set business image url
        { property: 'og:image', content: process.env.PROJECT_OG_IMAGE },
      ],
      link: [
        { rel: 'icon', href: '/shop-small.ico' }
      ]
    },
  },
})