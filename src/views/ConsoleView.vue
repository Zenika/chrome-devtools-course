<script setup lang="ts">
import ConsoleLogStyler from '@/components/ConsoleLogStyler.vue'
import ConsoleTable from '@/components/ConsoleTable.vue'
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";
</script>

<template>
  <Slides>
    <Slide>
      <p>⌘ + ⌥ + J / ⌃ + ⇧ + J</p>
    </Slide>
    <Slide class="text-center">
      <p>Fonction <code>inspect(mySelector)</code>, le ctrl + F like.</p>
      <pre v-highlightjs>
        <code class="javascript code-snippet">inspect(document.querySelector('header'))</code>
      </pre>
    </Slide>
    <Slide class="flex-column align-center"><ConsoleTable  /></Slide>
    <Slide><ConsoleLogStyler /></Slide>
  </Slides>
</template>

<style scoped lang="scss"></style>
