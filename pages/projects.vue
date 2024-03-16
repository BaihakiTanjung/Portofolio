<template>
  <section class="projects">

    <!-- Modal -->
    <no-ssr>
      <ProjectModal :data="data" v-show="showModal" @close-modal="showModal = false"></ProjectModal>
    </no-ssr>
    <!-- End Modal -->

    <div class="container px-4 mx-auto text-center">
      <div class="pb-6 sm:flex sm:flex-wrap sm:-mx-4">
        <div v-for="(project, index) in getProjects" :key="project.name" class="mt-8 sm:px-6 sm:w-1/2 lg:w-1/3">

          <div v-animate-css="{ classes: 'zoomInRight', delay: 100 * index + 50 }" class="max-w-sm mx-auto card-item">
            <a @click="handleShowModal(project)">
              <div class="relative overflow-hidden cursor-pointer card-img">
                <nuxt-img :src="getPict(project.picture)" :alt="project.name" loading="lazy"
                  class="object-cover w-full h-48" />
                <div class="card-hover"></div>
              </div>
            </a>
            <div class="px-1 py-4">
              <h5 class="text-xl font-semibold text-primary dark:text-secondary">
                {{ project.name }}
              </h5>
              <p class="text-primary dark:text-secondary">
                {{ project.desc }}
              </p>
            </div>
            <div class="px-2 pt-1 pb-2">
              <span v-for="stack in project.stack" :key="stack"
                class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-bold rounded-lg opacity-75 bg-primary dark:bg-secondary text-secondary dark:text-primary">{{
        stack
      }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed, useStore, ref } from "@nuxtjs/composition-api";
export default {
  transition: "slide-bottom",
  head() {
    return {
      title: this.title,
    };
  },
  setup() {
    const store = useStore();

    const showModal = ref(false)
    const data = ref({})

    const handleShowModal = (value) => {
      showModal.value = true
      data.value = value
    }

    const getProjects = computed(() => {
      return store.getters["projects/getProjects"];
    });

    const getPict = (picture) => {
      return `/images/projects/` + picture;
    };

    return {
      getProjects,
      getPict,
      showModal,
      handleShowModal,
      data
    };
  },
  computed: {
    title() {
      return this.$capitalizeFirstLetter(this.$route.name);
    },
  },
};
</script>
