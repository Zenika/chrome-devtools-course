<script setup lang="ts">
import ConsoleLogStyler from '@/components/ConsoleLogStyler.vue'
import ConsoleTable from '@/components/ConsoleTable.vue'
</script>

<template>
  <ul>
    <li>
      <p>command + option + J / ctrl + shift + J.</p>
    </li>
    <li>
      <p>Fonction inspect(mySelector), le ctrl + F like.</p>
      <pre v-highlightjs>
        <code class="javascript code-snippet">inspect(document.querySelector('header'))</code>
      </pre>
    </li>
    <li><ConsoleTable /></li>
    <li><ConsoleLogStyler /></li>
  </ul>
</template>

<style scoped lang="scss"></style>
