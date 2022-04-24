<template>
  <div class="js-counter">
    <button @click="decrement(1)">-</button>
    {{ count }}
    <button @click="increment(1)">+</button>
  </div>
</template>
<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    initCount: {
      type: Number,
      default: 0
      }
  },
  data: function () {
    return {
      count: this.initCount | 0
    }
  },
  methods: {
    decrement(num) {
      this.count -= num;
    },
    increment(num) {
      this.count += num
    }
  }
})
</script>
<style lang="scss" scoped>
.js-counter {
  color: yellow;
}
</style>
