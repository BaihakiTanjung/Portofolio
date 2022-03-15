<template>
  <section class="skills">
    <div class="container px-4 mx-auto">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 pb-6">
        <div
          v-for="(skill, index) in skillsList"
          :key="skill.name"
          class="sm:px-6 sm:w-1/2 lg:w-1/4 mt-8"
        >
          <div
            v-animate-css="{ classes: 'zoomInDown', delay: 100 * index + 50 }"
            class="card-item mx-auto max-w-sm text-center"
          >
            <i
              v-if="skill.icon != ''"
              class="colored"
              :class="skill.icon"
              style="font-size: 10rem"
            ></i>
            <img v-else :src="skill.url" alt="skill" srcset="" />
            <div class="px-1 py-4 text-center">
              <h5
                class="font-semibold text-xl text-primary dark:text-secondary"
              >
                {{ skill.name }}
              </h5>
              <p class="text-gray-600">
                <span class="font-bold">{{
                  `${skill.experience} ${
                    skill.experienceYear == "m" ? "Months" : "Years"
                  }`
                }}</span>
                of experience
              </p>
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
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css",
        },
      ],
    };
  },
  data() {
    return {
      skills: [
        {
          name: "Flutter",
          icon: "devicon-flutter-plain",
          experience: 2,
          experienceYear: "m",
        },
        {
          name: "VueJS",
          icon: "devicon-vuejs-plain",
          experience: 2,
          experienceYear: "y",
        },
        {
          name: "NuxtJS",
          icon: "devicon-nuxtjs-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "Laravel",
          icon: "devicon-laravel-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "React",
          icon: "devicon-react-plain",
          experience: 3,
          experienceYear: "m",
        },
        {
          name: "Typescript",
          icon: "devicon-typescript-plain",
          experience: 5,
          experienceYear: "m",
        },
        {
          name: "ExpressJS",
          icon: "devicon-express-original",
          experience: 1,
          experienceYear: "m",
        },
        {
          name: "Python",
          icon: "devicon-python-plain",
          experience: 2,
          experienceYear: "m",
        },
        {
          name: "Mysql",
          icon: "devicon-mysql-plain",
          experience: 4,
          experienceYear: "y",
        },
        {
          name: "MongoDB",
          icon: "devicon-mongodb-plain",
          experience: 2,
          experienceYear: "m",
        },
      ],
    };
  },
  computed: {
    skillsList() {
      const orderExperience = ["y", "m"];

      return this.skills.sort((a, b) => {
        return (
          orderExperience.indexOf(a.experienceYear) -
          orderExperience.indexOf(b.experienceYear)
        );
      });
    },
    title() {
      return this.$capitalizeFirstLetter(this.$route.name);
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 240px;
  height: 240px;
}
</style>
