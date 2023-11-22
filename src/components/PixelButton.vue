<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    text: string
    action?: Function
    size?: string
  }>(),
  {
    size: '13px'
  }
)
const buttonSize = props.size
</script>

<template>
  <button class="pixel-btn" @click="props.action">{{ props.text }}</button>
</template>

<style scoped lang="scss">
$outline-width: 6px;
$shadow-width: 4px;

$button-background: #c25872;
$sec-button-background: #d7657f;
$shadow-color: #883e5f;

.pixel-btn {
  background: $button-background;
  display: inline-block;
  position: relative;
  text-align: center;
  font-size: v-bind(buttonSize);
  padding: 12px;
  font-family: 'Press Start 2P', cursive;
  text-decoration: none;
  color: white;
  cursor: pointer;
  box-shadow: inset (-$shadow-width) (-$shadow-width) 0px 0px $shadow-color;

  &:hover,
  &:focus {
    background: $sec-button-background;
    box-shadow: inset (-$shadow-width * 1.5) (-$shadow-width * 1.5) 0px 0px $shadow-color;
  }

  &:active {
    box-shadow: inset $shadow-width $shadow-width 0 0 $shadow-color;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -$outline-width;
    left: 0;
    border-top: $outline-width black solid;
    border-bottom: $outline-width black solid;
  }

  &:after {
    left: -$outline-width;
    top: 0;
    border-left: $outline-width black solid;
    border-right: $outline-width black solid;
  }
}
</style>
