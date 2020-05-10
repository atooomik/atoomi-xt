<template>
  <div>
    <the-hero />
    <offer />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TheHero from "../components/TheHero.vue";
import Offer from "../components/MainOffer.vue";

export default {
  components: {
    Logo,
    TheHero,
    Offer
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
