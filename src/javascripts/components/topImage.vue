<template>
  <div class="top-image">
    <img :src="imageSrc" :alt="props.alt" height="350" width="350" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import topImage from "@/images/noimage.png";
export default defineComponent({
  props: {
    alt: {
      type: String,
      default: "top page",
    },
  },
  setup(props) {
    const imageSrc = topImage;
    return { props, imageSrc };
  },
});
</script>
<style lang="scss" scoped></style>
