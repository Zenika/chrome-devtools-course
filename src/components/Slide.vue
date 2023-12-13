<template>
  <li class="slide">
    <slot></slot>
  </li>
</template>

<style lang="scss">
.slide {
  list-style: none;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
