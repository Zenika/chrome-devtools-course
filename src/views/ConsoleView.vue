<script setup lang="ts">
import ConsoleLogStyler from '@/components/ConsoleLogStyler.vue'
import ConsoleTable from '@/components/ConsoleTable.vue'
import Slides from '@/components/Slides.vue'
import Slide from '@/components/Slide.vue'
import ConsoleApi from '@/components/ConsoleApi.vue'
</script>

<template>
  <Slides>
    <Slide>
      <p>Un plongeon dans le code</p>
      <p>⌘ + ⌥ + J / ⌃ + ⇧ + J</p>
    </Slide>
    <Slide class="text-center">
      <p>Fonction <code>inspect(mySelector)</code>, le ctrl + F like.</p>
      <pre v-highlightjs>
        <code class="javascript code-snippet">inspect(document.querySelector('header'))</code>
      </pre>
    </Slide>
    <Slide class="flex-column align-center"><ConsoleApi /></Slide>
    <Slide class="flex-column align-center"><ConsoleTable /></Slide>
    <Slide><ConsoleLogStyler /></Slide>
    <Slide>
      <p>On fait le ménage <span class="emoticon">🧹</span></p>
      <ul>
        <li>
          méthode
          <pre>clear()</pre>
          (alias
          <pre>console.clear()</pre>
          )
        </li>
        <li>ctrl + L</li>
        <li>clique sur 🚫</li>
      </ul>
    </Slide>
  </Slides>
</template>

<style scoped lang="scss">
pre {
  display: inline;
}
.emoticon {
  font-size: 35px;
}
</style>
