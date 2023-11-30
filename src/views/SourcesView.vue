<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { ref } from 'vue'
import { Beer, getBeers } from '@/libs/api'
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";

const sumText = ref('')
const beers = ref<Beer[]>([])

const getRandomNumber = (): number => Math.floor(Math.random() * 100)

const sumNumbers = (): void => {
  const numberOne = getRandomNumber()
  console.log({ numberOne })
  const numberTwo = getRandomNumber()
  console.log({ numberTwo })
  const sum = numberOne + numberTwo
  console.log({ sum })
  sumText.value = `${numberOne} + ${numberTwo} = ${sum}`
}

const onClickApiButton = async (): Promise<void> => {
  beers.value = await getBeers()
}
</script>

<template>
  <Slides>
    <Slide>
      <p>Plus besoin de console.log dans le code 😎</p>
      <div class="button-wrapper">
        <PixelButton text="Run" :action="sumNumbers" />
        <span class="text">{{ sumText }}</span>
      </div>
    </Slide>
    <Slide>
      <p><code>debugger</code>, c'est quoi cette commande Javascript ?</p>
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
    <Slide>
      <p>Chrome Devtools remplace mon IDE ?</p>
    </Slide>
    <Slide>
      <p>Snippets, petits mais costauds.</p>
    </Slide>
  </Slides>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  align-items: center;
  margin: 10px 0;

  & .pixel-btn {
    margin-right: 16px;
  }
}
</style>
