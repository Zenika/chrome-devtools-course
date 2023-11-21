<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/elements" class="router-link">Elements</RouterLink>
      <RouterLink to="/console" class="router-link">Console</RouterLink>
      <RouterLink to="/sources" class="router-link">Sources</RouterLink>
      <RouterLink to="/network" class="router-link">Network</RouterLink>
      <RouterLink to="/performances" class="router-link">Performance</RouterLink>
      <RouterLink to="/memory" class="router-link">Memory</RouterLink>
      <RouterLink to="/application" class="router-link">Application</RouterLink>
      <RouterLink to="/lighthouse" class="router-link">Lighthouse</RouterLink>
      <RouterLink to="/more" class="router-link">More Tools</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  width: 280px;
  margin-right: 32px;
  padding-right: 48px;
}

nav {
  width: 100%;
  text-align: left;
  font-size: 1rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-right: 1px solid var(--color-border);
}

nav a {
  color: var(--color-text);
}

nav a.router-link-exact-active {
  color: var(--color-secondary);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  //border-left: 1px solid var(--color-border);
}
</style>
