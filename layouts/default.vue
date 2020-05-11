<template>
  <div>
    <the-header />
    <nuxt class="p1-10" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "DefaultLayout",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>
<style>
.p1-10 {
  padding-top: 10vh;
}
</style>
