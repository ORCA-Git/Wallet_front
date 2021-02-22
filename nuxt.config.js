const webpack = require('webpack')

export default {
  //mode: 'universal',
  server :{
    port: process.env.PORT || 3000 ,
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  loader: 'less-loader',
  options: { math: { 'parens-division': true, } },
  //mode: 'spa',
  ssr: false,
  loading: true,
  //target: 'SSR',
  target: 'static',
  env: {
    dev: false
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - wallet',
    title: 'wallet',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href: "https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",
        integrity:"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu",
        crossorigin:"anonymous" ,
        rel: "stylesheet"
      },
      { href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css", rel:"stylesheet" },
      { href: "https://data.jsdelivr.com/v1/package/npm/@icon/themify-icons/badge" },
      { href: "https://www.jsdelivr.com/package/npm/@icon/themify-icons" },
      { href: "https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.9.55/css/materialdesignicons.min.css" },
      { href: "https://cdnjs.cloudflare.com/ajax/libs/weather-icons/2.0.10/css/weather-icons.min.css" },
    ]
  },
  css: [
    '~/assets/css/style.css',
    '~/assets/css/animate.css',
    '~/assets/css/transition.css',
    '~/assets/css/colors/blue-dark.css'
  ],
  plugins: [
    { src: './plugins/jquery.min.js', ssr: false },
    { src: '~/plugins/vue-datepicker', ssr: false },
    { src: '~/plugins/vue-chart.js', ssr: false },
    { src: '~/plugins/vue-moment.js', ssr: false },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  modules: ['vue-sweetalert2/nuxt'],
  styleResources: {
    less: [
    ]
  },
  axios: {
    proxy: true,
    proxyHeaders: false,
    credentials: false
  },
  build: {
    transpile: ["vee-validate/dist/rules"],
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
      })
    ]
  }
}
