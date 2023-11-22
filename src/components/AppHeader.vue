<template>
  <header>
    <h1 class="text-center">CLICK DROIT <span class="arrow">➞</span> INSPECTER</h1>
    <h2 class="text-center secondary-color">
      <span class="knife left">🔪</span> Un couteau suisse bien rempli
      <span class="knife right">🔪</span>
    </h2>
  </header>
</template>

<style scoped lang="scss">
header {
  margin-bottom: 50px;
}

.arrow {
  display: inline-block;
  transform: translateY(-6px);
}

.knife {
  transform: scale(1.5);
  display: inline-block;

  &.left {
    transform: rotate(-95deg);
  }

  &.right {
    transform: rotate(95deg) rotateY(180deg);
  }
}
</style>
