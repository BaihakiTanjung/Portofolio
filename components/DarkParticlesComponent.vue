<template>
  <!-- particle component-->
  <div>
    <vue-particles class="tsparticles" color="#fff" :particleOpacity="0.7" :particlesNumber="50" shapeType="star"
      :particleSize="5" linesColor="#dedede" :linesWidth="0" :lineLinked="false" :lineOpacity="1" :linesDistance="0"
      :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push"></vue-particles>
  </div>
</template>
<script>
export default {
  setup() {
    const particlesInit = async (engine) => {
      // await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      // console.log("Particles container loaded", container);
    };

    return {
      particlesInit,
      particlesLoaded,
    };
  },
};
</script>
<style scoped>
.tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
