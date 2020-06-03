<template>
  <div
    id="parent"
    class="relative flex flex-col mx-auto rounded-lg overflow-hidden shadow-lg"
  >
    <div class="parent-scale h-64 lg:h-68">
      <img
        class="max-w-xl w-full h-full object-contain"
        :src="imgSrc"
        alt="props-hover-card"
      />
    </div>
    <!--<button
      type="button"
      class="parent-shadow mx-auto px-4 py-2 text-center rounded-lg bg-atoom-ylw"
      @click="show"
    >
    </button> -->
    <p
      v-text="title"
      class="py-4 text-center text-xl text-white font-bold border-2 border-atoom-gp bg-atoom-gp"
    />
    <div class="overlay">
      <p class="text-black p-4" v-text="description"></p>
    </div>
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
    },
    description: {
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
