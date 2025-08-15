// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/supabase',
    '@pinia/nuxt'
  ],

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
})