<template>
  <div id="main" class="grid grid-cols-2 my-6 overflow-hidden">
    <div class="main-traslate-r">
      <img class="w-48 self-center" :src="imgAsset" alt="" />
      <p v-text="title" class="text-white"></p>
    </div>
    <div
      class="main-traslate-l flex items-center p-2 bg-atoom-semiGray rounded-lg"
    >
      <p v-text="resume" class="text-white text-sm"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HoverSideCards",
  props: {
    imgAsset: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "Malaka"
    },
    resume: {
      type: String,
      default: "Malaka"
    }
  }
};
</script>
