import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    target: 'static',
    ssr: false,
    css: ['@/assets/css/tailwind.css'],
    googleFonts: {
        families: {
          'Architects Daughter': true,
        },
    },

})
