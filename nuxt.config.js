const path = require('path')

module.exports = {
  /*
  ** Extend nuxt using nuxt modules system (Alpha)
  ** Learn more: https://github.com/nuxt/nuxt-modules
  */
  modules: [
    {
      src: '@nuxtjs/pwa',
      options: { icon: { sizes: [512, 192, 380] } },
    },
    ['@nuxtjs/google-adsense', {
      id: process.env.NUXT_ENV_ADSENSE_ID,
      tag: 'ads-by-google',
      test: ['development', 'test'].includes(process.env.NODE_ENV)
    }],
  ],

  generate: {
    dir: "public"
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fe320a' },
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: 'Nuxt.js',
    theme_color: '#3B8070',
  },

  /**
   * Define modules to be loaded upon nuxt build - i.e. when server gets up
   */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
  ],

  /**
   * Allow global tokens - mixins and vars - to be included in every .vue
   */
  styleResources: {
    scss: [
      './assets/tokens/*.scss',
    ],
  },

  /**
   * Custom plugins
   */
  plugins: ['~/plugins/i18n.js'],

  /*
  ** Build configuration
  */
  build: {
    extend (config, context) {
      config.resolve.alias['@'] = path.resolve(__dirname)
      config.module.rules.push({
        resourceQuery: /blockType=i18n/,
        loader: '@kazupon/vue-i18n-loader'
      })
    },
  },
}
