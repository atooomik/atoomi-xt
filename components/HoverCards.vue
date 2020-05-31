<template>
  <div id="parent" class="main-card flex flex-col mx-auto">
    <div class="parent-scale h-64 lg:w-68 lg:h-68">
      <img
        class=" max-w-xl w-full h-full object-contain"
        :src="imgSrc"
        alt="props-hover-card"
      />
    </div>
    -
    <button
      type="button"
      class="parent-shadow mx-auto px-4 py-2 text-center rounded-lg bg-atoom-ylw"
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
.parent-scale,
.parent-shadow {
  transition: 0.4s ease-out;
}

#parent:hover .parent-scale {
  transform: scale(1.08);
}
#parent:hover .parent-shadow {
  background-color: theme("backgroundColor.atoom.dk");
  box-shadow: theme("boxShadow.lg");
}
</style>
