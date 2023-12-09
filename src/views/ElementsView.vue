<template>
  <Slides>
    <Slide>
      <p>Comment obtenir un screenshot d'une partie du DOM.</p>
    </Slide>
    <Slide class="list-element">
      <p><code>$0</code>, <code>$$($1)</code>... quoi du jQuery dans les DevTools ???</p>
    </Slide>
    <Slide class="text-center">
      <p>CSS Flex vs CSS Grid.</p>
      <div class="flex-container">
        <div class="block">1</div>
        <div class="block">2</div>
        <div class="block">3</div>
      </div>
      <div class="grid-container">
        <div class="block one">1</div>
        <div class="block two">2</div>
        <div class="block three">3</div>
      </div>
    </Slide>
    <Slide class="flex-column align-center">
      <p>⌘ + ⇧ + P / ⌃ + ⇧ + P : la boite à outils</p>
      <img src="../assets/img/command-menu.png" alt="Command menu">
    </Slide>
    <Slide class="text-center">
      <!-- You need to enable Font Editor tool experiment -->
      <p>CSS Font editor</p>
      <p>pour ne plus passer 3h à ajuster la police</p>
    </Slide>
    <Slide class="text-center">
      <p>Pick your color</p>

      <div class="colors">
        <div class="color red"></div>
        <div class="color blue"></div>
        <div class="color green"></div>
        <div class="color yellow"></div>
        <div class="color orange"></div>
        <div class="color purple"></div>
      </div>
    </Slide>
    <Slide class="flex-column align-center">
      <p>Surveille ton DOM: <code>monitorEvents(el)</code></p>
      <img src="../assets/img/monitor-events.png" alt="Monitor event">
    </Slide>
  </Slides>
</template>

<style scoped lang="scss">

li {
  list-style: none;
}

.block {
  padding: 4px 40px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid black;
  color: white;
}

.flex-container {
  margin-block: 20px;
  width: 980px;

  .block {
    background-color: var(--color-secondary);
  }
}

.grid-container {
  width: 980px;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: repeat(3, 50px);

  .block {
    background-color: #29bb8e;
  }
}

.colors {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  gap: 25px;

  .color {
    width: 75px;
    height: 75px;
    border-radius: 5px;

    &.red {
      background-color: var(--color-secondary);
    }
    &.blue {
      background-color: #5A7D9A;
    }
    &.green {
      background-color: #29bb8e;
    }
    &.yellow {
      background-color: #F4D03F;
    }
    &.orange {
      background-color: #F5B041;
    }
    &.purple {
      background-color: #8E44AD;
    }
  }
}


img {
  margin-top: 15px;
}

</style>
<script setup lang="ts">
import Slides from "@/components/Slides.vue";
import Slide from "@/components/Slide.vue";
</script>
