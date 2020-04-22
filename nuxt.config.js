const path = require('path')
import langPathPlugin from './webpack/lang-path-plugin.js'

module.exports = {
  /*
  ** Extend nuxt using nuxt modules system (Alpha)
  ** Learn more: https://github.com/nuxt/nuxt-modules
  */
  modules: [{
    src: '@nuxtjs/pwa',
    options: { icon: { sizes: [512, 192, 380] } },
  }],

  server: {
    port: 9090,
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
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
    extend (config, { isDev, isClient }) {
      config.resolve.alias['@'] = path.resolve(__dirname)
      config.plugins.push(langPathPlugin)
    },
  },
}
