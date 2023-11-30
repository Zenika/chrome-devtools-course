<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { getBeers } from '@/libs/api'
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";
</script>

<template>
  <Slides>
    <Slide>
      <p>Network Throttling, le retour au réseau Edge.</p>
      <PixelButton text="API call" :action="getBeers" />
    </Slide>
    <Slide>Copy as, simplifiez-vous les requêtes HTTP.</Slide>
  </Slides>
</template>

<style scoped lang="scss">
.pixel-btn {
  margin-top: 10px;
}
</style>
