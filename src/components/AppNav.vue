<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/elements">Elements</RouterLink>
      <RouterLink to="/console">Console</RouterLink>
      <RouterLink to="/sources">Sources</RouterLink>
      <RouterLink to="/network">Network</RouterLink>
      <RouterLink to="/performances">Performance</RouterLink>
      <RouterLink to="/memory">Memory</RouterLink>
      <RouterLink to="/application">Application</RouterLink>
      <RouterLink to="/lighthouse">Lighthouse</RouterLink>
      <RouterLink to="/more">More Tools</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  width: 280px;
  border-right: 1px solid var(--color-border);
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
}

nav a {
  color: var(--color-text);
}

nav a.router-link-exact-active {
  color: var(--color-green);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
</style>
