<template>
  <div>
    <div class="container mx-auto">
      <navbar></navbar>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import navbar from './navbar'
export default {
  components: {
    navbar
  }
}
</script>

