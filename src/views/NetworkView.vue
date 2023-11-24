<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { getBeers } from '@/libs/api'
</script>

<template>
  <ul>
    <li>
      <p>Network Throttling, le retour au réseau Edge.</p>
      <PixelButton text="API call" :action="getBeers" />
    </li>
    <li>Copy as, simplifiez-vous les requêtes HTTP.</li>
  </ul>
</template>

<style scoped lang="scss">
.pixel-btn {
  margin-top: 10px;
}
</style>
