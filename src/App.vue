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
  padding: 1rem 0;
}
</style>
