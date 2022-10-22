<template>
  <section class="skills">
    <div class="container px-4 mx-auto">
      <div class="pb-6 sm:flex sm:flex-wrap sm:-mx-4">
        <div v-for="(skill, index) in skillsList" :key="skill.name" class="mt-8 sm:px-6 sm:w-1/2 lg:w-1/4">
          <div v-animate-css="{ classes: 'zoomInDown', delay: 100 * index + 50 }"
            class="max-w-sm mx-auto text-center card-item">
            <i v-if="skill.icon != ''" class="colored" :class="skill.icon" style="font-size: 10rem"></i>
            <img v-else :src="skill.url" :alt="skill.name" loading="lazy" />
            <div class="px-1 py-4 text-center">
              <h5 class="text-xl font-semibold text-primary dark:text-secondary">
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
import { computed, useStore } from "@nuxtjs/composition-api";
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
  setup() {
    const store = useStore();

    const skillsList = computed(() => {
      const orderExperience = ["y", "m"];

      return store.getters["skills/getSkills"].sort((a, b) => {
        return (
          orderExperience.indexOf(a.experienceYear) -
          orderExperience.indexOf(b.experienceYear)
        );
      });
    });

    return {
      skillsList,
    };
  },
  computed: {
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
