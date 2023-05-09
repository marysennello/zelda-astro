// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',

  ], //end modules

  app: {
    head: {
      title: 'Zelda Astrology',
      meta: [
        { name: 'description', content: 'zelda astrology'}
      ],
      link: [
        //material symbols
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'},
        //google fonts
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Inter:wght@400;600&family=Syne:wght@400;700&display=swap'},
        
      ]
    }
  } //end app
  //end export
})
