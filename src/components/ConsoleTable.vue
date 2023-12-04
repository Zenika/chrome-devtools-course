<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'

const characters = [
  { name: 'Darth Vader', species: 'Sith', origin: 'Tatooine' },
  { name: 'Jar Jar Binks', species: 'Gungan', origin: 'Naboo' },
  { name: 'Admiral Ackbar', species: 'Mon calamari', origin: 'Mon Cala' },
  { name: 'Chewie', species: 'Wookie', origin: 'Kashyyyk' }
]

const planets = {
  tatooine: 'sand',
  hot: 'ice',
  kashyyyk: 'forest'
}
</script>

<template>
  <p class="margin-bottom">l'API console : log, warn et error ne sont pas seuls !</p>
  <pre v-highlightjs>
    <code class="javascript code-snippet">{{ `const characters = [\n  { name: 'Darth Vader', species: 'Sith', origin: 'Tatooine' },\n  { name: 'Jar Jar Binks', species: 'Gungan', origin: 'Naboo' },\n  { name: 'Admiral Ackbar', species: 'Mon calamari', origin: 'Mon Cala' },\n  { name: 'Chewie', species: 'Wookie', origin: 'Kashyyyk' }\n}\nconsole.table(characters)` }}</code>
    <code class="javascript code-snippet">{{ `const planets = {\n  tatooine: 'sand',\n  hot: 'ice',\n  kashyyyk: 'forest'\n}\nconsole.table(planets)` }}</code>
  </pre>
  <div class="flex align-center">
  <PixelButton class="margin-right" text="Log array" @click="() => console.table(characters)" />
  <PixelButton text="Log object" @click="() => console.table(planets)" />
  </div>
</template>

<style scoped lang="scss">
.margin-right {
  margin-right: 24px;
}
.margin-bottom {
  margin-bottom: 15px;
}

pre {
  font-size: 0.6em;
  display: flex;
  flex-direction: column;

  code {
    margin-bottom: 15px;
  }
}
</style>
