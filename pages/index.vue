<template>
  <div>
    <section class="home">
      <div class="
          container
          antialiased
          leading-normal
          tracking-wider
          text-gray-900
          bg-cover
        ">
        <div class="
            flex flex-wrap
            items-center
            h-auto
            max-w-4xl
            mx-auto
            my-32
            lg:my-32
          ">
          <!--Main Col-->
          <Tilt v-if="isLargeScreen" class="parent-parallax" :parallax="true" :options="options">
            <div id="profile" class="
                w-full
                mx-6
                rounded-lg
                shadow-2xl
                opacity-75
                lg:rounded-l-lg lg:rounded-r-none
                bg-primary
                dark:bg-secondary
                lg:mx-0
                child-parallax
              ">
              <div class="p-4 text-center md:p-12 child-html">
                <!-- Image for view-->
                <img v-animate-css="{ classes: 'fadeInDown', delay: 200 }" src="/images/photo.webp" class="
                    block
                    object-cover object-left
                    w-48
                    h-48
                    mx-auto
                    -mt-32
                    bg-center bg-cover
                    rounded-full
                    shadow-xl
                  " alt="profile" loading="lazy" />
                <h1 v-animate-css="{ classes: 'fadeInUp', delay: 100 }" class="
                    pt-6
                    text-3xl
                    font-bold
                    text-secondary
                    dark:text-primary
                  ">
                  {{ getHome.name }}
                </h1>
                <div class="
                    w-3/5
                    pt-3
                    mx-auto
                    border-b-2
                    shadow-2xl
                    opacity-25
                    border-white-600
                    dark:border-indigo-600
                  "></div>
                <p v-animate-css="{ classes: 'fadeInUp', delay: 200 }" class="
                    flex
                    items-center
                    justify-center
                    pt-4
                    text-base
                    font-bold
                    text-secondary
                    dark:text-primary
                  ">
                  <svg class="
                      h-4
                      pr-4
                      fill-current
                      text-secondary
                      dark:text-primary
                    " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                  </svg>
                  {{ getHome.job }} at {{ getHome.office }}
                </p>
                <p v-animate-css="{ classes: 'fadeInUp', delay: 300 }" class="
                    flex
                    items-center
                    justify-center
                    pt-2
                    text-xs text-secondary
                    dark:text-primary
                    lg:text-sm
                  ">
                  <svg class="
                      h-4
                      pr-4
                      fill-current
                      text-secondary
                      dark:text-primary
                    " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                      d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                  </svg>
                  {{ getHome.address }}
                </p>
                <p v-animate-css="{ classes: 'fadeInUp', delay: 400 }" class="
                    p-8
                    lg:text-lg
                    text-md text-secondary
                    dark:text-primary
                  ">
                  {{ getHome.description }}
                </p>
              </div>
            </div>
          </Tilt>
          <div v-else id="profile" class="
              w-full
              mx-2
              rounded-lg
              shadow-2xl
              opacity-75
              lg:rounded-l-lg lg:rounded-r-none
              bg-primary
              dark:bg-secondary
              lg:mx-0
              child-parallax
            ">
            <div class="p-4 text-center md:p-12 child-html">
              <!-- Image for view-->
              <img src="/images/photo.webp" class="
              block
              object-cover
              w-32
              h-32
              mx-auto
              -mt-24
              bg-center bg-cover
              rounded-full
              shadow-xl
              " alt="photo" loading="lazy" />
              <h1 class="pt-6 font-bold text-1xl text-secondary dark:text-primary">
                {{ getHome.name }}
              </h1>
              <div class="
                  w-3/5
                  pt-3
                  mx-auto
                  border-b-2
                  shadow-2xl
                  opacity-25
                  border-white-600
                  dark:border-indigo-600
                "></div>
              <p class="
                  flex
                  items-center
                  justify-center
                  pt-4
                  text-xs
                  font-bold
                  text-secondary
                  dark:text-primary
                ">
                <svg class="h-4 pr-4 fill-current text-secondary dark:text-primary" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                {{ getHome.job }} at {{ getHome.office }}
              </p>
              <p class="
                  flex
                  items-center
                  justify-center
                  pt-2
                  text-xs text-secondary
                  dark:text-primary
                  lg:text-sm
                ">
                <svg class="h-4 pr-4 fill-current text-secondary dark:text-primary" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path
                    d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
                </svg>
                {{ getHome.address }}
              </p>
              <p class="p-6 text-sm lg:text-lg text-secondary dark:text-primary">
                {{ getHome.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { useMediaQuery } from "@vueuse/core";
import { computed, useStore } from "@nuxtjs/composition-api";

export default {
  transition: "slide-bottom",
  setup() {
    const isLargeScreen = useMediaQuery("(min-width: 850px)");
    const store = useStore();
    const getHome = computed(() => {
      return store.getters["getHome"];
    });
    return {
      getHome,
      isLargeScreen,
    };
  },
  data() {
    return {
      options: {
        reverse: false,
        max: 25,
        startX: 0,
        startY: 0,
        perspective: 1000,
        scale: 1,
        speed: 250,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: false,
        "max-glare": 1,
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.child-parallax {
  transform: translateZ(80px);
}
</style>
