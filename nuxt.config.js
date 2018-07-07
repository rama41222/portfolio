const resolve = require('path').resolve

module.exports = {

  head: {
    title: 'Rama\'s Personal Space',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Rama&apos;s Personal Space'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      {rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,400,500,600'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=GFS+Didot|Lato:100,300,400,700,900'},
    ]
  },
  modules: [
    'nuxt-sass-resources-loader',
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/pwa'
  ],
  toast: {
    position: 'top-right',
    duration: 2000
  },
  sassResources: [
    resolve(__dirname, 'assets/css/style.scss'),
    resolve(__dirname, 'assets/css/variables.scss')
  ],
  css:[
    'assets/css/style.scss',
    'assets/css/variables.scss'
  ],
  loading: {color: '#3B8070'},
  plugins: ['~plugins/vee.js', '~plugins/spinner.js'],
  build: {
    vendor: ['vee-validate'],
    extend(config, {isDev, isClient, isServer}) {
     
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^epic-spinners/]
          })
        ]
      }
      
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
