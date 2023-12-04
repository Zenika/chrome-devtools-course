<script setup lang="ts">
import PixelButton from '@/components/PixelButton.vue'
import RadioColorPicker from '@/components/RadioColorPicker.vue'
import { computed, ref } from 'vue'

const selectedColor = ref('#ff1f8f')
const selectedFontSize = ref('16')

const codeSnippet = computed(
  () =>
    `console.log(\n  '%cJe suis trop stylé 😎',\n  'color: ${selectedColor.value}; font-family: monospace; font-size: ${selectedFontSize.value}px; font-weight: bold'\n)`
)

const printWithStyle = () => {
  console.log(
    '%cJe suis trop stylé 😎',
    `color: ${selectedColor.value}; font-family: monospace; font-size: ${selectedFontSize.value}px; font-weight: bold`
  )
}
const onColorChange = (color: string) => {
  selectedColor.value = color
}

const onRangeChange = (event: Event) => {
  selectedFontSize.value = (event.target as HTMLInputElement).value
}
</script>

<template>
  <p>Des logs qui ont du style :</p>
  <div class="wrapper">
    <RadioColorPicker @change="onColorChange" :currentColor="selectedColor" />
    <div class="flex align-center">
      <input
        id="font-size-range"
        type="range"
        min="10"
        max="50"
        value="20"
        @input="onRangeChange"
      />
      <label for="font-size-range">Font size : {{ selectedFontSize }}px</label>
    </div>
  </div>
  <pre v-highlightjs><code class="javascript code-snippet">{{ codeSnippet }}</code></pre>
  <PixelButton text="Print" @click="printWithStyle" />
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  margin-block: 8px;

  #font-size-range {
    margin-inline: 16px;

    & + label {
      font-size: 12px;
      margin-right: 24px;
    }
  }
}

pre {
  margin-bottom: 16px;
  font-size: 0.6em;
}

</style>
