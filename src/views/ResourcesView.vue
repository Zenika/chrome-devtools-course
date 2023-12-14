<script setup lang="ts">
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'
</script>

<template>
  <Slides>
    <Slide>
      <p>➠ <a target="_blank" href="https://developer.chrome.com/docs/devtools">https://developer.chrome.com/docs/devtools</a></p>
      <p>➠ <a target="_blank" href="https://devtoolstips.org">https://devtoolstips.org</a></p>
      <p>➠ <a target="_blank" href="https://www.canidev.tools/">https://www.canidev.tools</a></p>
      <p>➠ <a target="_blank" href="https://umaar.com/dev-tips/">https://umaar.com/dev-tips</a></p>
      <p>➠ <a target="_blank" href="https://youtu.be/BrsyIyYSP1c?si=XrSssqrBslcMFwED">https://youtu.be/BrsyIyYSP1c?si=XrSssqrBslcMFwED</a></p>
    </Slide>
  </Slides>
</template>

<style scoped>
div {
  padding: 0 40px;
}
p {
  margin-bottom: 20px;
  text-align: center;
}
</style>
