<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import { ref } from 'vue'
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'

const sumText = ref('')

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
</script>

<template>
  <Slides>
    <Slide class="flex-column align-center">
      <p>Plus besoin de console.log dans le code 😎</p>
      <div class="button-wrapper">
        <PixelButton text="Run" :action="sumNumbers" />
        <span class="text">{{ sumText }}</span>
      </div>
    </Slide>
    <Slide>
      <p><code>debugger</code>, c'est quoi cette commande Javascript ?</p>
    </Slide>

    <Slide class="text-center">
      <p>Chrome Devtools remplace mon IDE ?</p>
      <img src="../assets/img/editor.png" alt="Editor" />
    </Slide>
    <Slide class="text-center">
      <p>Snippets, petits mais costauds.</p>
      <img src="../assets/img/snippet.png" alt="Snippet" />
    </Slide>
    <Slide class="flex-column align-center">
      <p>Mais comment inspecter un élément au survol ??</p>
      <article class="tooltip-container">
        <PixelButton text="Show me" />
        <span class="tooltip-text">Attrappe moi si tu peux</span>
      </article>
    </Slide>
  </Slides>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;

  & .pixel-btn {
    margin-bottom: 15px;
  }
}

.tooltip-container {
  position: relative;
  display: inline-block;
  margin-top: 15px;

  .tooltip-text {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 125%;
    left: 50%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
}

img {
  margin-top: 15px;
}
</style>
