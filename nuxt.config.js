module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'lile',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: ['axios', 'element-ui'],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    { src: '~plugins/htp.js' },
    { src: '~plugins/element-ui.js', ssr: true }
  ],
  css: [
    'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],
  router: {
    middleware: 'log'
  },
  generate: {
    routes: [
      '/info/1',
      '/info/2',
      '/info/3',
      '/info/4',
      '/info/5',
      '/info/6'
    ]
  }
}
