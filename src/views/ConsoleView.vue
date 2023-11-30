<script setup lang="ts">
import ConsoleLogStyler from '@/components/ConsoleLogStyler.vue'
import ConsoleTable from '@/components/ConsoleTable.vue'
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";
</script>

<template>
  <Slides>
    <Slide>
      <p>command + option + J / ctrl + shift + J.</p>
    </Slide>
    <Slide>
      <p>Fonction inspect(mySelector), le ctrl + F like.</p>
      <pre v-highlightjs>
        <code class="javascript code-snippet">inspect(document.querySelector('header'))</code>
      </pre>
    </Slide>
    <Slide><ConsoleTable /></Slide>
    <Slide><ConsoleLogStyler /></Slide>
  </Slides>
</template>

<style scoped lang="scss"></style>
