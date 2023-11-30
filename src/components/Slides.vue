<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue';
import Slide from "@/components/Slide.vue";

const slots = defineSlots<{ default(): typeof Slide[] }>()

const currentSlide = ref(0);

const slideContents = slots.default()

const totalSlides = computed(() => slideContents.length);

const nextSlide = () => {
  currentSlide.value = currentSlide.value < totalSlides.value - 1 ? (currentSlide.value + 1) : currentSlide.value
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value > 0) ? currentSlide.value - 1 : 0
};

function onKeyPressListener(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft') {
    prevSlide();
  } else if (event.key === 'ArrowRight') {
    nextSlide();
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyPressListener);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyPressListener);
});
</script>
<template>
  <ul>
    <component :is="slots.default()[currentSlide]"/>
  </ul>
  <div class="badges">
    <button class="left" @click="prevSlide" :class="{invisible: currentSlide === 0}">←</button>
    <span v-for="(_, i) in slideContents" :class="i === currentSlide ? 'badge active' : 'badge'"></span>
    <button class="right" @click="nextSlide" :class="{invisible: currentSlide === totalSlides - 1}">→</button>
  </div>
</template>

<style scoped lang="scss">

ul {
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badges {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .badge {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: #333;
    }
  }


  button {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: #eee;
    }

    &.invisible {
      opacity: 0;
      cursor: none;
    }

    &.left {
      margin-right: 15px;
      margin-left: 0;
    }

    &.right {
      margin-left: 15px;
      margin-right: 0;
    }

  }

}
</style>
