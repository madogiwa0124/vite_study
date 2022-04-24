<template>
  <div class="ts-counter">
    <button @click="decrement(1)">-</button>
    {{ state.count }}
    <button @click="increment(1)">+</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";

interface Data {
  count: number;
}

interface Props {
  initCount: number;
}

export default defineComponent({
  props: {
    initCount: {
      type: Number,
      default: 0,
    },
  },
  setup(props: Props) {
    const state = reactive<Data>({ count: props.initCount });
    const decrement = (num: number) => (state.count -= num);
    const increment = (num: number) => (state.count += num);
    return { state, decrement, increment };
  },
});
</script>
<style lang="scss" scoped>
.ts-counter {
  color: blue;
}
</style>
