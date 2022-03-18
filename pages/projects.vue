<template>
  <section class="projects">
    <div class="container px-4 mx-auto text-center">
      <div class="pb-6 sm:flex sm:flex-wrap sm:-mx-4">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          class="mt-8 sm:px-6 sm:w-1/2 lg:w-1/3"
        >
          <div
            v-animate-css="{ classes: 'zoomInRight', delay: 100 * index + 50 }"
            class="max-w-sm mx-auto card-item"
          >
            <a target="_blank" :href="project.url">
              <div class="relative overflow-hidden cursor-pointer card-img">
                <img
                  :src="getPict(project.picture)"
                  alt="card image"
                  class="object-cover w-full h-48"
                />
                <div class="card-hover"></div>
              </div>
            </a>
            <div class="px-1 py-4">
              <h5
                class="text-xl font-semibold text-primary dark:text-secondary"
              >
                {{ project.name }}
              </h5>
              <p class="text-primary dark:text-secondary">
                {{ project.desc }}
              </p>
            </div>
            <div class="px-2 pt-1 pb-2">
              <span
                v-for="stack in project.stack"
                :key="stack"
                class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-bold rounded-lg opacity-75  bg-primary dark:bg-secondary text-secondary dark:text-primary"
                >{{ stack }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  transition: "slide-bottom",
  head() {
    return {
      title: this.title,
    };
  },
  computed: {
    title() {
      return this.$capitalizeFirstLetter(this.$route.name);
    },
  },
  data() {
    return {
      projects: [
        {
          name: "Sitama Admin 3",
          desc: "Website content management system",
          picture: "sitama-admin-3.webp",
          url: "https://sitama-admin.com",
          stack: ["NuxtJS", "Vuetify", "Composition API", "Vuex"],
        },
        {
          name: "Sitama PKP",
          desc: "Website management selling",
          picture: "pkp.webp",
          url: "https://finance.sitama.co.id/",
          stack: ["NuxtJS", "Vuetify", "Vuex", "Socket.io"],
        },

        {
          name: "Chat Realtime",
          desc: "Chat Realtime",
          picture: "chat-realtime.webp",
          url: "https://github.com/BaihakiTanjung/vue-realtime-chat",
          stack: ["VueJs", "Laravel", "Firebase"],
        },
        {
          name: "Simple Realtime Bidding",
          desc: "A realtime bidding system for a company",
          picture: "realtime-bidding.webp",
          url: "",
          stack: ["VueJs", "Laravel", "Socket.io"],
        },
        {
          name: "Nuxt Authentication",
          desc: "Nuxt auth with sanctum, login via google and facebook",
          picture: "nuxt-authentication.webp",
          url: "https://nuxt-bay.herokuapp.com/login",
          stack: ["NuxtJs", "Laravel"],
        },
        {
          name: "Mobile Movie App",
          desc: "Movie App simple open source project",
          picture: "movie-app.webp",
          url: "https://github.com/BaihakiTanjung/react-ionic",
          stack: ["Ionic", "Tailwind", "React", "Typescript"],
        },

        {
          name: "Find me by",
          desc: "Website search cation youtube url",
          picture: "findmeby.webp",
          url: "https://findmeby.netlify.app/",
          stack: ["NuxtJS", "Vuetify", "Vuex"],
        },
        {
          name: "Eccomerce Grosir Mobil V2",
          desc: "Car sales e-commerce website",
          picture: "eccomerce-grosir-mobil-v2.webp",
          stack: ["NuxtJS", "Vuetify", "Tailwind"],
        },
        {
          name: "Eccomerce Grosir Mobil",
          desc: "Car sales e-commerce website",
          picture: "eccormece-grosirmobil.webp",
          stack: ["NuxtJS", "Boostrap"],
        },
        {
          name: "Vehiclo 2.0",
          desc: "Vehicle management website",
          picture: "vehiclo2.webp",
          url: "https://vehiclo.id",
          stack: ["NuxtJS", "Buefy", "Vuex"],
        },
        {
          name: "Indo Event",
          desc: "Ticketing system website",
          picture: "indo-event.webp",
          url: "http://demo.indoevent.id/",
          stack: ["NuxtJS", "Boostrap"],
        },
        {
          name: "Dashboard",
          desc: "Dashboard monitoring system",
          picture: "dashboard.webp",
          stack: ["VueJs", "Boostrap"],
        },
        {
          name: "Vehiclo",
          desc: "Vehicle asset management",
          picture: "vehiclo.webp",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Sitama Admin",
          desc: "All business data management",
          picture: "sitamaadmin.webp",
          stack: ["Laravel", "VueJs", "Vuesax", "Boostrap"],
        },
        {
          name: "Portofolio",
          desc: "my porto",
          picture: "portofolio.webp",
          stack: ["NuxtJs", "Tailwind"],
        },
        {
          name: "Grosir Mobil 2.0",
          desc: "E-commerce site for buying and selling cars",
          picture: "grosirmobil.webp",
          url: "https://grosirmobil.id",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Negondeal",
          desc: "Digital Car Sales",
          picture: "negondeal.webp",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Admin Negondeal",
          desc: "Management, Manage negondeal apps",
          picture: "adminnegondeal.webp",
          stack: ["Laravel", "VueJs", "Vuesax"],
        },
        {
          name: "Monster Slayer",
          desc: "Simple game like MMORPG",
          picture: "monsterslayer.webp",
          stack: ["VueJs"],
        },
        {
          name: "Logtify",
          desc: "Attendance data management",
          picture: "logtify.webp",
          stack: ["VueJs", "Laravel", "Boostrap"],
        },
        {
          name: "Admin Grosir Mobil",
          desc: "Management Set Up Car Wholesale Application",
          picture: "admingrosirmobil.webp",
          stack: ["VueJs", "Laravel", "Boostrap", "Vuesax"],
        },
        {
          name: "Rozor Galeri",
          desc: "Eccomerce sales hot whells",
          picture: "rozorgaleri.webp",
          stack: ["VueJs", "Laravel", "Boostrap"],
        },
        {
          name: "Pengaduan Santri",
          desc: "Complaints between students and teachers (Bootcamp Final Project)",
          picture: "pengaduan.webp",
          stack: ["Laravel", "Boostrap"],
        },
        {
          name: "Telegram Bot Message",
          desc: "Send messages to Telegram with Bot",
          picture: "telegrambot.webp",
          stack: ["Javascript"],
        },
        {
          name: "Bacot Generator",
          desc: "Convert text vowels to I",
          picture: "bacotgenerator.webp",
          stack: ["Javascript"],
        },
        {
          name: "Yayasan Quran Company Profile",
          desc: "Introduction to Quran Foundation through Website",
          picture: "ycquran.webp",
          stack: ["Laravel", "Boostrap"],
        },
        {
          name: "E-Voting",
          desc: "Voting digitally osis",
          picture: "evoting.webp",
          stack: ["PHP"],
        },
      ],
    };
  },
  methods: {
    getPict(pict) {
      return require(`~/assets/images/projects/` + pict);
    },
  },
};
</script>
