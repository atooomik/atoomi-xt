<template>
  <div class="">
    <the-hero />
    <h1 class="text-5xl text-yellow-300">
      atoomi-xt
    </h1>
    <h2 class="subtitle">
      atoomik website developed with vue and nuxt
    </h2>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TheHero from "../components/TheHero.vue";

export default {
  components: {
    Logo,
    TheHero
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
