<template>
  <section class="projects">
    <div class="container px-4 mx-auto text-center">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 pb-6">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          class="sm:px-6 sm:w-1/2 lg:w-1/3 mt-8"
        >
          <div
            v-animate-css="{ classes: 'zoomInRight', delay: 100 * index + 50 }"
            class="card-item mx-auto max-w-sm"
          >
            <div class="card-img relative overflow-hidden cursor-pointer">
              <img
                :src="getPict(project.picture)"
                alt="card image"
                class="object-cover h-48 w-full"
              />
              <div class="card-hover"></div>
            </div>
            <div class="px-1 py-4">
              <h5
                class="font-semibold text-xl text-primary dark:text-secondary"
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
                class="
                  inline-block
                  bg-primary
                  dark:bg-secondary
                  opacity-75
                  rounded-lg
                  px-3
                  py-1
                  text-sm
                  font-bold
                  text-secondary
                  dark:text-primary
                  mr-2
                  mb-2
                "
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
          name: "Find me by",
          desc: "Website search cation youtube url",
          picture: "findmeby.png",
          stack: ["NuxtJS", "Vuetify"],
        },
        {
          name: "Eccomerce Grosir Mobil V2",
          desc: "Car sales e-commerce website",
          picture: "eccomerce-grosir-mobil-v2.png",
          stack: ["NuxtJS", "Vuetify", "Tailwind"],
        },
        {
          name: "Eccomerce Grosir Mobil",
          desc: "Car sales e-commerce website",
          picture: "eccormece-grosirmobil.png",
          stack: ["NuxtJS", "Boostrap"],
        },
        {
          name: "Vehiclo 2.0",
          desc: "Vehicle management website",
          picture: "vehiclo2.png",
          stack: ["NuxtJS", "Buefy"],
        },
        {
          name: "Indo Event",
          desc: "Ticketing system website",
          picture: "indo-event.png",
          stack: ["NuxtJS", "Boostrap"],
        },
        {
          name: "Dashboard",
          desc: "Dashboard monitoring system",
          picture: "dashboard.png",
          stack: ["VueJs", "Boostrap"],
        },
        {
          name: "Vehiclo",
          desc: "Vehicle asset management",
          picture: "vehiclo.png",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Sitama Admin",
          desc: "All business data management",
          picture: "sitamaadmin.png",
          stack: ["Laravel", "VueJs", "Vuesax", "Boostrap"],
        },
        {
          name: "Portofolio",
          desc: "my porto",
          picture: "portofolio.png",
          stack: ["NuxtJs", "Tailwind"],
        },
        {
          name: "Grosir Mobil 2.0",
          desc: "E-commerce site for buying and selling cars",
          picture: "grosirmobil.png",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Negondeal",
          desc: "Digital Car Sales",
          picture: "negondeal.png",
          stack: ["Laravel", "VueJs", "Boostrap"],
        },
        {
          name: "Admin Negondeal",
          desc: "Management, Manage negondeal apps",
          picture: "adminnegondeal.png",
          stack: ["Laravel", "VueJs", "Vuesax"],
        },
        {
          name: "Monster Slayer",
          desc: "Simple game like MMORPG",
          picture: "monsterslayer.png",
          stack: ["VueJs"],
        },
        {
          name: "Logtify",
          desc: "Attendance data management",
          picture: "logtify.png",
          stack: ["VueJs", "Laravel", "Boostrap"],
        },
        {
          name: "Admin Grosir Mobil",
          desc: "Management Set Up Car Wholesale Application",
          picture: "admingrosirmobil.png",
          stack: ["VueJs", "Laravel", "Boostrap", "Vuesax"],
        },
        {
          name: "Rozor Galeri",
          desc: "Eccomerce sales hot whells",
          picture: "rozorgaleri.png",
          stack: ["VueJs", "Laravel", "Boostrap"],
        },
        {
          name: "Pengaduan Santri",
          desc: "Complaints between students and teachers (Bootcamp Final Project)",
          picture: "pengaduan.png",
          stack: ["Laravel", "Boostrap"],
        },
        {
          name: "Telegram Bot Message",
          desc: "Send messages to Telegram with Bot",
          picture: "telegrambot.png",
          stack: ["Javascript"],
        },
        {
          name: "Bacot Generator",
          desc: "Convert text vowels to I",
          picture: "bacotgenerator.png",
          stack: ["Javascript"],
        },
        {
          name: "Yayasan Quran Company Profile",
          desc: "Introduction to Quran Foundation through Website",
          picture: "ycquran.png",
          stack: ["Laravel", "Boostrap"],
        },
        {
          name: "E-Voting",
          desc: "Voting digitally osis",
          picture: "evoting.png",
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
