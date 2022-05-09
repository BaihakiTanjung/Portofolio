<template>
  <div>
    <!-- Particle -->
    <DarkParticlesComponent v-if="this.$colorMode.preference != 'light'" />
    <LightParticlesComponent v-else />
    <!-- End Particle -->

    <div class="container mx-auto">
      <navbar v-animate-css="{ classes: 'fadeInDown' }"></navbar>
      <Nuxt />

      <div class="absolute top-0 right-0 m-5">
        <button class="p-1 rounded" @click="changeMode">
          <img
            v-animate-css="{ classes: 'fadeInDown', delay: 1000 }"
            :src="require(`~/assets/images/${mode}-mode.svg`)"
            width="24"
            height="24"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./navbar";

export default {
  components: {
    navbar,
  },
  setup() {
    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };

    return {
      particlesInit,
      particlesLoaded,
    };
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
  computed: {
    mode() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
};
</script>
<style>
.dark-mode {
  @apply text-secondary bg-primary;
}
.light-mode {
  @apply text-primary bg-secondary;
}
</style>

