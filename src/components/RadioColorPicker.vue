<script setup lang="ts">
defineProps<{
  currentColor: string
}>()
const emit = defineEmits<{
  change: [color: string]
}>()

const color1 = '#ff1f8f'
const color2 = '#80ffec'
const color3 = '#fcca46'
const color4 = '#a6e000'

const handleChange = (event: Event) => {
  emit('change', (event.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="custom-radios">
    <div>
      <input
        type="radio"
        id="color-1"
        name="color-1"
        :value="color1"
        :checked="currentColor === color1"
        @change="handleChange"
      />
      <label for="color-1">
        <span> </span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        id="color-2"
        name="color"
        :value="color2"
        :checked="currentColor === color2"
        @change="handleChange"
      />
      <label for="color-2">
        <span> </span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        id="color-3"
        name="color"
        :value="color3"
        :checked="currentColor === color3"
        @change="handleChange"
      />
      <label for="color-3">
        <span> </span>
      </label>
    </div>

    <div>
      <input
        type="radio"
        id="color-4"
        name="color"
        :value="color4"
        :checked="currentColor === color4"
        @change="handleChange"
      />
      <label for="color-4">
        <span> </span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
$color-1: v-bind(color1);
$color-2: v-bind(color2);
$color-3: v-bind(color3);
$color-4: v-bind(color4);

.custom-radios {
  margin-bottom: 8px;

  div {
    display: inline-block;
  }

  input[type='radio'] {
    display: none;

    + label {
      color: #333;
      font-family: Arial, sans-serif;
      font-size: 14px;

      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        margin: -1px 4px 0 0;
        vertical-align: middle;
        cursor: pointer;
        border-radius: 50%;
        border: 2px solid #ffffff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
        line-height: 44px;

        img {
          opacity: 0;
          transition: all 0.3s ease;
        }
      }
    }

    &#color-1 + label span {
      background-color: $color-1;
    }

    &#color-2 + label span {
      background-color: $color-2;
    }

    &#color-3 + label span {
      background-color: $color-3;
    }

    &#color-4 + label span {
      background-color: $color-4;
    }

    &:checked + label span {
      border-color: rgba(25, 24, 24, 0.98);
    }
  }
}
</style>
