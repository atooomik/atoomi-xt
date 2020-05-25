<template>
  <div>
    <the-header />
    <nuxt class="pt1-10" />
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
