const resolve = require('path').resolve

module.exports = {

  head: {
    title: 'Rama\'s Personal Space',
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1'},
      { name:'keywords', content:'Rama\s Personal Space, Dinushanka, Ramawickrama, Rama41222, rama41222'},
      { hid: 'description', name: 'description', content: 'Rama&apos;s Personal Space'},
      { hid: 'og-image', property: 'og-image', content: '/icon.png' },
      { name:'author', content:'Rama41222'},
      { name:'apple-mobile-web-app-capable', content:'yes'},
      { name: 'og:title', content: "Rama\'s Personal Space" },
      { name: 'og:description', content: 'Rama&apos;s Personal Space' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'http://dinushanka.me' },
      { name: 'og:image', content: '/icon.png' },
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'},
      {rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,400,500,600'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=GFS+Didot|Lato:100,300,400,700,900'},
      { rel: "apple-touch-icon", sizes: "57x57", href: "/icons/apple-icon-57x57.png"},
      { rel: "apple-touch-icon", sizes: "60x60", href: "/icons/apple-icon-60x60.png"},
      { rel: "apple-touch-icon", sizes: "72x72", href: "/icons/apple-icon-72x72.png"},
      { rel: "apple-touch-icon", sizes: "76x76", href: "/icons/apple-icon-76x76.png"},
      { rel: "apple-touch-icon", sizes: "114x114", href: "/icons/apple-icon-114x114.png"},
      { rel: "apple-touch-icon", sizes: "120x120", href: "/icons/apple-icon-120x120.png"},
      { rel: "apple-touch-icon", sizes: "144x144", href: "/icons/apple-icon-144x144.png"},
      { rel: "apple-touch-icon", sizes: "152x152", href: "/icons/apple-icon-152x152.png"},
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-icon-180x180.png"},
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/android-icon-192x192.png"},
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png"},
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png"},
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png"},
      { name: "msapplication-TileColor", content: "#ffffff"},
      { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png"},
      { name: "theme-color", content: "#ffffff"}
      
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
  cache: {
    max: 1000,
    maxAge: 900000
  },
  loading: {color: '#3B8070'},
  plugins: ['~plugins/vee.js', '~plugins/spinner.js', {src:'~plugins/online.js', ssr: false }],
  manifest: {
    name: "Rama's Personal Space",
    short_name: "Rama",
    theme_color: "#fbfbfb",
    background_color: "#fcfcfc",
    display: "standalone",
    Scope: ".",
    start_url: "http://dinushanka.me",
    lang: "en",
    icons: [
      {
        src: "/icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        density: "0.75"
      },
      {
        src: "/icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        density: "1.0"
      },
      {
        src: "/icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        density: "1.5"
      },
      {
        src: "/icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        density: "2.0"
      },
      {
        src: "/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        density: "3.0"
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        density: "4.0"
      }
    ]
  },
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
        
      },
      {
        urlPattern: 'http://dinushanka.me/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
    
      },
      {
        urlPattern: '/.*',
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
