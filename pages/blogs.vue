<template>
  <section class="blogs">
    <h1 class="text-center text-4xl text-primary dark:text-secondary">😎</h1>
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
};
</script>
<style scoped>
</style>
