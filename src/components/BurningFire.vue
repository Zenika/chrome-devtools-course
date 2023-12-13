<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="fire">🔥</div>
    <div class="fire">🔥</div>
    <div class="fire">🔥</div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
}
.fire {
  animation: vibrate-1 0.3s linear infinite both;
  font-size: 50px;
}

@keyframes vibrate-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}
</style>
