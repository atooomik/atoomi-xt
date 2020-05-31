<template>
  <div
    id="parent"
    class="relative flex flex-col mx-auto border-2 rounded-lg overflow-hidden lg:w-68 hover:shadow-lgz"
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
      class="parent-color my-4 text-xl text-black font-bold text-center"
    />
    <div class="overlay">
      <p class="text-white p-4" v-text="description"></p>
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
