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
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'top-right',
    duration: 2000
  },
  sassResources: [
    resolve(__dirname, 'assets/scss/variable.scss'),
    resolve(__dirname, 'assets/scss/style.scss')
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
