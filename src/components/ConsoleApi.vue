<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'

const printLog = (): void => {
  console.log('Hello World')
  console.warn('deprecated API, it will be removed in the next major update')
  console.error('user is undefined')
}

const runTimer = (): void => {
  console.time('Process time')
  for (let i = 0; i < 100000000; i++) {}
  console.timeEnd('Process time')
}
</script>

<template>
  <p class="margin-bottom">l'API console : log, warn et error ne sont pas seuls !</p>
  <pre v-highlightjs>
    <code class="javascript code-snippet">{{
        "console.log('Hello World')\nconsole.warn('deprecated API, it will be removed in the next major update')\nconsole.error('user is undefined')"
      }}</code>
  </pre>
  <div class="flex align-center">
    <PixelButton text="print" @click="printLog" />
  </div>
  <pre v-highlightjs>
    <code class="javascript code-snippet">{{
        "console.time('Process time')\ntransformData()\nconsole.timeEnd('Process time')"
      }}</code>
  </pre>
  <div class="flex align-center">
    <PixelButton text="run" @click="runTimer" />
  </div>
</template>

<style scoped lang="scss">
pre {
  font-size: 0.6em;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  code {
    margin-bottom: 15px;
  }
}
</style>
