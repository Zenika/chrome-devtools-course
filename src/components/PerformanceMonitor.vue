<script setup lang="ts">

import PixelButton from "@/components/PixelButton.vue";

const burnCpu = () => {
  const startTime = new Date().getTime();
  const endTime = startTime + 3 * 1000;

  while (new Date().getTime() < endTime) {
    for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
    }
  }
}
</script>

<template>
  <div class="button-wrapper">
    <PixelButton text="CPU Burning" :action="burnCpu"/>
  </div>
</template>

<style scoped lang="scss">
.button-wrapper {
  margin-top: 25px;
}
</style>
