const defer = "defer";
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Baihaki Al Biruni",
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Web Developer Enthusiast likes things related to technology 💻 and also loves the world of investment 💰.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/photo.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon/favicon.ico",
      },
      {
        rel: "stylesheet",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css",
      },
      // Optimize lfc for Google PageSpeed Insights
      {
        rel: "preload",
        as: "image",
        href: `/images/photo.webp`,
      },
    ],
  },
  target: "server",

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // CSS file in the project
    "@/assets/css/main.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "~/plugins/global.js",
    { src: "~/plugins/vue-tilt.js", ssr: false },
    { src: "~/plugins/v-animate.js", ssr: false },
    { src: "~/plugins/vue-particles.js", ssr: false },
  ],

  colorMode: "dark",

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  googleFonts: {
    families: {
      Poppins: true,
    },
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@vueuse/core/nuxt",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/google-fonts",
  ],

  router: {
    prefetchLinks: false,
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@nuxtjs/color-mode"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: true,
  },
};
