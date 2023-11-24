<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { ref } from 'vue'
import { Beer, getBeers } from '@/libs/api'

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
  <ul>
    <li>
      <p>Plus besoin de console.log dans le code 😎</p>
      <div class="button-wrapper">
        <PixelButton text="Run" :action="sumNumbers" />
        <span class="text">{{ sumText }}</span>
      </div>
    </li>
    <li>
      <p>"debugger", c'est quoi cette commande Javascript ?</p>
    </li>
    <li>
      <p>Network overrides, ou comment mocker ses API sans backend.</p>
      <div class="button-wrapper">
        <PixelButton text="API call" :action="onClickApiButton" />
        <span v-if="beers.length > 0" class="text"
          >There is {{ beers.length }} beer<span v-if="beers.length > 1">s</span>.</span
        >
      </div>
    </li>
    <li>
      <p>Chrome Devtools remplace mon IDE ?</p>
    </li>
    <li>
      <p>Snippets, petits mais costauds.</p>
    </li>
  </ul>
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
