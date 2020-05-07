<template>
  <div>
    <the-header />
    <nuxt class="p1-10" />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader
  }
};
</script>
<style>
.p1-10 {
  padding-top: 10vh;
}
</style>
