<script lang="ts">
import {computed, defineComponent, h, onMounted, onUnmounted, ref} from 'vue';

export default defineComponent({
  setup(_, {slots}) {
    const currentSlide = ref(0);

    const slideContents = ref(slots.default?.() ?? [])

    const totalSlides = computed(() => slideContents.value.length);

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % totalSlides.value
    };

    const prevSlide = () => {
      currentSlide.value = (currentSlide.value + totalSlides.value - 1) % totalSlides.value
    };

    const onKeyPressListener = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', onKeyPressListener);
    });

    onUnmounted(() => {
      window.removeEventListener('keydown', onKeyPressListener);
    });

    return () => [
      h("ul", slideContents.value?.[currentSlide.value]),
      h('div', {class: 'badges'}, [
        h('button', {
          class: 'left',
          onClick: prevSlide
        }, "←"),
        ...slideContents.value.map((_, i) => h('span', {class: i === currentSlide.value ? 'badge active' : 'badge'})),
        h('button', {
          class: 'right',
          onClick: nextSlide
        }, "→")
      ]),
    ]
  }
});
</script>

<style scoped lang="scss">

ul {
  height: calc(100% - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badges {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;

  .badge {
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: #ddd;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: #333;
    }
  }


  button {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    margin: 5px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: #eee;
    }

    &.left {
      margin-right: 15px;
      margin-left: 0;
    }

    &.right {
      margin-left: 15px;
      margin-right: 0;
    }

  }

}
</style>
