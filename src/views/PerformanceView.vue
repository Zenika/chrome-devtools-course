<script setup lang="ts">
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'
import { onMounted, ref } from 'vue'
import { getBeers } from '@/libs/api'

const showSquareOne = ref(false)
const showSquareTwo = ref(false)
const showMenu = ref(false)
const interval = setInterval(() => {
  showSquareOne.value = !showSquareOne.value
}, 500)

onMounted(async () => {
  await getBeers()

  setTimeout(() => {
    clearInterval(interval)
  }, 2500)

  setTimeout(() => {
    showMenu.value = true
  }, 1500)

  setTimeout(() => {
    showSquareTwo.value = true
  }, 2500)
})
</script>

<template>
  <Slides>
    <Slide>
      <p>CLS : Cumulative Layout Shift</p>
      <div id="menu" v-if="showMenu">MENU</div>
      <div class="wrapper">
        <div v-if="showSquareOne" class="square one"></div>
        <div v-if="showSquareTwo" class="square two"></div>
        <div class="square three"></div>
      </div>
    </Slide>
    <Slide>
      <p>CPU Throttling, mayday je n'ai plus de puissance.</p>
      <a href="https://facebook.com" target="_blank">www.facebook.com</a>
    </Slide>
  </Slides>
</template>

<style scoped lang="scss">
#menu {
  border: 1px solid black;
  width: 100%;
  text-align: center;
  padding: 5px 10px;
  background: var(--color-secondary);
  color: white;
  border-radius: 12px;
}

.wrapper {
  display: flex;
  gap: 40px;
}

.square {
  width: 100px;
  height: 100px;
  border-radius: 12px;

  &.one {
    background: var(--color-secondary);
  }

  &.two {
    background: #29bb8e;
  }

  &.three {
    background: #f5b041;
  }
}

.hidden {
  display: none;
}
</style>
