<template>
  <div class="w-64 mx-4">
    <div class="w-full relative h-64 ">
      <img
        class="scale-img absolute w-full h-full object-contain"
        :src="imgSrc"
        alt="props-hover-card"
      />
    </div>
    <button
      type="button"
      class="p-4 text-center bg-atoom-ylw rounded-lg"
      @click="show"
    >
      <p v-text="title" class="text-white font-bold" />
    </button>
  </div>
</template>

<script>
export default {
  name: "HoverCards",
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    show() {
      this.$emit("showText");
    }
  }
};
</script>

<style lang="scss">
.scale-img {
  transition: 0.4s ease-out;
  -webkit-transition: 0.4s ease-out;
  &:hover {
    transform: scale(1.08);
    -webkit-transform: scale(1.08);
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
    border-radius: 15px;
    -webkit-transition: 0.5s;
  }
}
</style>
