<template>
  <div>
    <nuxt-link to="/">
      <div class="flex items-center py-4 bg-atoom-dk">
        <img
          class="h-16"
          src="../assets/images/svgs/atoomik-logo.svg"
          alt="logo"
        />
        <p class="text-lg text-white">atoomik</p>
      </div>
    </nuxt-link>
    <fa-icon :icon="['fad', 'bars']" />
  </div>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style></style>
