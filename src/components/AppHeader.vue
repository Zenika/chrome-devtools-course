<template>
  <header>
    <h1 class="text-center">CLICK DROIT <span class="arrow">➞</span> INSPECTER</h1>
    <h2 class="text-center secondary-color">
      <span class="inline-block left">🔪</span> Un couteau suisse bien rempli
      <span class="inline-block right">🔪</span>
    </h2>
  </header>
</template>

<style scoped>
header {
  margin-bottom: 50px;
}

.arrow {
  display: inline-block;
  transform: translateY(-6px);
}

.left {
  transform: rotate(-95deg);
}

.right {
  transform: rotate(95deg) rotateY(180deg);
}
</style>
