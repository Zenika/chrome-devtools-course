<script setup lang="ts">
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";
import Rerender from "@/components/Rerender.vue";
import PerformanceMonitor from "@/components/PerformanceMonitor.vue";
</script>

<template>
  <Slides>
    <Slide>Animations</Slide>
    <Slide class="text-center">
      <p>Rendering</p>
      <Rerender/>
    </Slide>
    <Slide class="text-center">
      <p>Performance monitor</p>
      <PerformanceMonitor/>
    </Slide>
    <Slide>Coverage CSS</Slide>
  </Slides>
</template>

<style scoped lang="scss">

</style>
