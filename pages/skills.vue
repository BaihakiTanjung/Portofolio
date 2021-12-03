<template>
  <div>
    <section>
      <div class="skills">
        <div class="container px-4 mx-auto">
          <div class="sm:flex sm:flex-wrap sm:-mx-4 pb-6">
            <div
              v-for="skill in skillsList"
              :key="skill.name"
              class="sm:px-6 sm:w-1/2 lg:w-1/4 mt-8"
            >
              <div class="card-item mx-auto max-w-sm text-center">
                <i
                  v-if="skill.icon != ''"
                  class="colored"
                  :class="skill.icon"
                  style="font-size: 15rem"
                ></i>
                <img v-else :src="skill.url" alt="skill" srcset="" />
                <div class="px-1 py-4 text-center">
                  <h5
                    class="
                      font-semibold
                      text-xl text-primary
                      dark:text-secondary
                    "
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
      </div>
    </section>
  </div>
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
  computed: {
    title() {
      return this.$capitalizeFirstLetter(this.$route.name);
    },
  },
  data() {
    return {
      skills: [
        {
          name: "Photoshop",
          icon: "devicon-photoshop-plain",
          experience: 3,
          experienceYear: "y",
        },
        {
          name: "CSS",
          icon: "devicon-css3-plain",
          experience: 4,
          experienceYear: "y",
        },
        {
          name: "PHP",
          icon: "devicon-php-plain",
          experience: 4,
          experienceYear: "y",
        },
        {
          name: "SASS",
          icon: "devicon-sass-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "Webpack",
          icon: "devicon-webpack-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "Babel",
          icon: "devicon-babel-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "Composer",
          icon: "devicon-composer-plain",
          experience: 1,
          experienceYear: "y",
        },
        {
          name: "Flutter",
          icon: "devicon-flutter-plain",
          experience: 2,
          experienceYear: "m",
        },
        {
          name: "Github",
          icon: "devicon-github-plain",
          experience: 2,
          experienceYear: "y",
        },
        {
          name: "Javascript",
          icon: "devicon-javascript-plain",
          experience: 2,
          experienceYear: "y",
        },
        {
          name: "VueJS",
          icon: "devicon-vuejs-plain",
          experience: 1.8,
          experienceYear: "y",
        },
        {
          name: "NuxtJS",
          icon: "devicon-nuxtjs-plain",
          experience: 8,
          experienceYear: "m",
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
          experience: 3,
          experienceYear: "m",
        },
        {
          name: "Visual Studio Code",
          icon: "devicon-vscode-plain",
          experience: 4,
          experienceYear: "y",
        },
        {
          name: "Redis",
          icon: "devicon-redis-plain",
          experience: 1,
          experienceYear: "m",
        },
        {
          name: "NodeJS",
          icon: "devicon-nodejs-plain",
          experience: 1,
          experienceYear: "m",
        },
        {
          name: "Jquery",
          icon: "devicon-jquery-plain",
          experience: 4,
          experienceYear: "y",
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
      console.log(this.skills.sort(a));
      return this.skills.sort();
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
