const defer = 'defer'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Baihaki Al Biruni',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'portofolio baihaki al biruni'
      }
    ],
    link: [
      {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
      },
      { rel: 'stylesheet', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css' }
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    '@/assets/css/main.scss',

  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  plugins: ['~/plugins/global.js', { src: '~/plugins/vue-tilt.js', ssr: false }]
}
