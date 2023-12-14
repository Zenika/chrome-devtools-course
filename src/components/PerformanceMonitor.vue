<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import BurningFire from '@/components/BurningFire.vue'
import { ref } from 'vue'

const isBurning = ref(false)

const burnCpu = () => {
  isBurning.value = true
  const startTime = new Date().getTime()
  const endTime = startTime + 4 * 1000

  setTimeout(() => {
    while (new Date().getTime() < endTime) {}
    isBurning.value = false
  }, 100)
}
</script>

<template>
  <div class="button-wrapper">
    <PixelButton text="CPU Burning" :action="burnCpu" />
  </div>
  <BurningFire v-if="isBurning" />
</template>

<style scoped lang="scss">
.button-wrapper {
  margin-top: 25px;
}
</style>
