<template>
  <BaseModal v-if="data" v-bind="$attrs" v-on="$listeners">
    <!-- {{ data }} -->
    <div class="text-center text-3xl font-bold">
      {{ data.name }}
    </div>
    <div class="my-3">
      <img :src="getPict(data.picture)" alt="card image" class="object-cover w-full h-64" />
    </div>
    <div class="me-3">
      <a class="text-blue-400 font-bold" :href="data.url" target="_blank" rel="noopener noreferrer">Demo</a>
    </div>
    <div>
      <p>{{ data.desc }}</p>
    </div>
  </BaseModal>
</template>
<script>
import { computed, useStore, ref } from "@nuxtjs/composition-api";
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    const getPict = (picture) => {
      if (!picture) return;

      return `/images/projects/` + picture;
    };

    return {
      getPict
    }
  }
}
</script>
