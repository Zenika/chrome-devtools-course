<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { type Beer, getBeers } from '@/libs/api'
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'
import { ref } from 'vue'
import SpinningLoader from '@/components/SpinningLoader.vue'

const beers = ref<Beer[]>([])
const loading = ref(false)

const onClickApiButton = async (): Promise<void> => {
  beers.value = await getBeers()
}

const onClickApiCall = async (): Promise<void> => {
  try {
    loading.value = true
    await getBeers()
  } catch (err) {
    console.log(err)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <Slides>
    <Slide class="flex-column align-center">
      <p>Network Throttling, le retour au réseau Edge.</p>
      <div class="button-wrapper">
        <PixelButton text="API call" :action="onClickApiCall" />
        <SpinningLoader v-if="loading" />
      </div>
    </Slide>
    <Slide>
      <p>Network overrides, ou comment mocker ses API sans backend.</p>
      <div class="button-wrapper">
        <PixelButton text="API call" :action="onClickApiButton" />
        <span v-if="beers.length > 0" class="text"
          >There is {{ beers.length }} beer<span v-if="beers.length > 1">s</span>.</span
        >
      </div>
    </Slide>
    <Slide>Copy as, simplifiez-vous les requêtes HTTP.</Slide>
  </Slides>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  gap: 10px;
  position: relative;

  .pixel-btn {
    margin-bottom: 15px;
  }

  .spinning-loader {
    position: absolute;
    top: 60px;
  }
}
</style>
