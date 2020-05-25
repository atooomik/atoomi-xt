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
