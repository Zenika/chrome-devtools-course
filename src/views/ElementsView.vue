<template>
  <ul>
    <li>
      <p>Présentation générale.</p>
    </li>
    <li>
      <p>Comment obtenir un screenshot d'une partie du DOM.</p>
    </li>
    <li class="list-element">
      <p>$0, $$($1)... quoi du jQuery dans les DevTools ???</p>
    </li>
    <li>
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
    </li>
    <li>
      <p>command + shift + P / ctrl + shift + P : la boite à outils</p>
    </li>
    <li>
      <!-- You need to enable Font Editor tool experiment -->
      <p>CSS Font editor: pour ne plus passer 3h à ajuster la police</p>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.block {
  padding: 4px 40px;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid black;
  color: white;
}

.flex-container {
  margin-block: 20px;

  .block {
    background-color: var(--color-secondary);
  }
}

.grid-container {
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: repeat(3, 50px);

  .block {
    background-color: #29bb8e;
  }
}
</style>
<script setup lang="ts">
</script>
