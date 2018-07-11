const resolve = require('path').resolve

module.exports = {

  head: {
    title: 'Rama\'s Personal Space',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name:'keywords', content:'Rama\s Personal Space, Dinushanka, Ramawickrama, Rama41222, rama41222'},
      { hid: 'description', name: 'description', content: 'Rama&apos;s Personal Space'},
      { name:'author', content:'Rama41222'},
      { name:'apple-mobile-web-app-capable', content:'yes'},

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
  plugins: ['~plugins/vee.js', '~plugins/spinner.js', {src:'~plugins/online.js', ssr: false }],
  manifest: {
    name: "Rama's Personal Space",
    short_name: "Rama",
    theme_color: "#fbfbfb",
    background_color: "#fcfcfc",
    display: "fullscreen",
    Scope: ".",
    start_url: "/",
    lang: "en"
  },
  offline: true,
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
      },
      {
        urlPattern: 'https://cdn.linearicons.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        
      },
      {
        urlPattern: 'https://use.fontawesome.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
        
      }
    ]
  },
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
