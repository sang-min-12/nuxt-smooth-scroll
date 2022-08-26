import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    target: 'static',
    ssr: false,
    css: ['@/assets/css/tailwind.css'],
    googleFonts: {
        download: true,
        families: {
          'Architects Daughter': true,
           Inter: [100, 500, 700],
           Poppins: true,
           Mali: {
            wght: [400, 600, 700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        base64: false,
        },
    

})
