<script setup lang="ts">
import { onUnmounted, reactive } from 'vue'

const row = reactive([
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
  { id: 5, value: 0 }
])

const interval = setInterval(() => {
  const randomIndex = Math.floor(Math.random() * row.length)
  row[randomIndex].value += 1
}, 250)

onUnmounted(() => clearInterval(interval))
</script>

<template>
  <div class="row">
    <span v-for="item in row" :key="item.id">
      <b>{{ item.id }}</b>
      <i>{{ item.value }}</i>
    </span>
  </div>
</template>

<style scoped lang="scss">
.row {
  display: flex;
  margin-top: 25px;

  span {
    width: 50px;
    height: 50px;
    border: 1px solid var(--color-border);
    text-align: center;
    margin: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    i {
      color: white;
      height: 0;
      width: 0;
    }
  }
}
</style>
