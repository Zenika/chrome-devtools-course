<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <AppHeader />
  <div class="flex">
    <AppNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 1rem;
  width: 100%;
  height: 100%;
  font-family: Robot;
  font-size: 1.5em;
}

.flex {
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
