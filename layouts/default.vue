<template>
  <div class="sln-gp-grad">
    <the-header />
    <nuxt />
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
