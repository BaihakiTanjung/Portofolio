<template>
  <div>
    <nav>
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-center sm:h-16 md:h-32">
          <div class="flex items-center">
            <div class="hidden text-right md:block">
              <div class="flex items-baseline ml-10">
                <nuxt-link to="/"
                  class=" navbar-item text-primary dark:text-secondary hover:bg-gray-400 dark-hover:bg-blue-900">Home
                </nuxt-link>
                <!-- <a href="#">Home</a> -->
                <nuxt-link to="/skills"
                  class=" navbar-item text-primary dark:text-secondary hover:bg-gray-400 dark-hover:bg-blue-900">Skills
                </nuxt-link>
                <nuxt-link to="/projects" href="#"
                  class=" navbar-item text-primary dark:text-secondary hover:bg-gray-400 dark-hover:bg-blue-900">
                  Projects</nuxt-link>
                <nuxt-link to="/blogs" href="#"
                  class=" navbar-item text-primary dark:text-secondary hover:bg-gray-400 dark-hover:bg-blue-900">Blogs
                </nuxt-link>
                <nuxt-link to="/contacts" href="#"
                  class=" navbar-item text-primary dark:text-secondary hover:bg-gray-400 dark-hover:bg-blue-900">
                  Contacts</nuxt-link>
              </div>
            </div>
          </div>
          <div class="flex py-5 -mr-2 md:hidden">
            <!-- Mobile menu button -->
            <button @click="toggle"
              class="inline-flex items-center justify-center p-2 transition rounded-md  text-primary dark:text-secondary hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
              <svg :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']" stroke="currentColor" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg>
              <svg :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']" stroke="currentColor" fill="none"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div :class="[isOpen ? 'opacity-1' : 'hidden opacity-1', 'md:hidden']"
        class="transition-opacity duration-200 ease-out-in">
        <div v-animate-css="{ classes: 'fadeInCenter', delay: 100 }" class="px-2 pt-2 pb-3 text-center sm:px-3">
          <nuxt-link to="/" href="#" class="navbar-item-mobile text-primary dark:text-secondary">Home</nuxt-link>
          <nuxt-link to="/skills" href="#" class="navbar-item-mobile text-primary dark:text-secondary">Skills
          </nuxt-link>
          <nuxt-link to="/projects" href="#" class="navbar-item-mobile text-primary dark:text-secondary">Projects
          </nuxt-link>
          <nuxt-link to="/blogs" href="#" class="navbar-item-mobile text-primary dark:text-secondary">Blogs</nuxt-link>
          <nuxt-link to="/contacts" href="#" class="navbar-item-mobile text-primary dark:text-secondary">Contacts
          </nuxt-link>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700"></div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
  watch: {
    $route(val) {
      setTimeout(() => {
        this.isOpen = false;
      }, 100);
    },
  },
};
</script>
<style scoped lang="scss">
.navbar-item {
  @apply px-3 py-2 mx-1 text-2xl font-medium rounded-md transition-all ease-in-out duration-200;
}

.navbar-item-mobile {
  @apply block px-3 py-2 text-base font-medium rounded-md;
}

.dark-mode {
  .nuxt-link-exact-active {
    @apply bg-blue-900;
  }
}

.light-mode {
  .nuxt-link-exact-active {
    @apply bg-gray-400;
  }
}
</style>
