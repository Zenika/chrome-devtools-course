<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppNav from '@/components/AppNav.vue'
</script>

<template>
  <AppHeader />
  <div id="app-content">
    <AppNav />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app-content {
  display: flex;
}
</style>
