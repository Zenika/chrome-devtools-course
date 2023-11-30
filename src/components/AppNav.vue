<script setup lang="ts">
import {RouterLink, useRoute, useRouter} from 'vue-router'
import {onMounted, onUnmounted, ref} from "vue";

const links = ref<any[]>([]);
const route = useRoute();
const router = useRouter();
let currentLinkIndex = 0;

function findCurrentLinkIndex() {
  const currentPath = route.path;
  currentLinkIndex = links.value.findIndex(el => el?.$props.to === currentPath);
}

function onKeyPressListener(event: KeyboardEvent) {
  if (event.key === 'ArrowUp') {
    currentLinkIndex = Math.max(currentLinkIndex - 1, 0);
  } else if (event.key === 'ArrowDown') {
    currentLinkIndex = Math.min(currentLinkIndex + 1, links.value.length - 1);
  }

  const currentLink = links.value[currentLinkIndex];
  if (currentLink) {
    router.replace(currentLink.$props.to);
  }
}

onMounted(() => {
  findCurrentLinkIndex();
  window.addEventListener('keydown', onKeyPressListener);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyPressListener);
});
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink :ref="el => links.push(el)" to="/" class="router-link">Home</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/elements" class="router-link">Elements</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/console" class="router-link">Console</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/sources" class="router-link">Sources</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/network" class="router-link">Network</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/performance" class="router-link">Performance</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/application" class="router-link">Application</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/lighthouse" class="router-link">Lighthouse</RouterLink>
      <RouterLink :ref="el => links.push(el)" to="/more" class="router-link">More Tools</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 280px;
}

nav {
  width: 100%;
  text-align: left;
  font-size: 1rem;
  padding: 1rem 1.2rem 1rem 0;
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
}
</style>
