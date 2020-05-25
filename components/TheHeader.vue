<template>
  <div class="the-header h1-10 bg-atoom-dk">
    <div class="the-header__brand z-15">
      <nuxt-link class="flex items-center" to="/">
        <img
          class="h-16"
          src="../assets/images/svg-icons/atoomik-logo.svg"
          alt="logo"
        />
        <p class="text-lg text-white">atoomik</p>
      </nuxt-link>
    </div>

    <nav>
      <ul class="the-header__menu-dk">
        <li class="font-bold text-lg text-white mx-4">
          <nuxt-link to="/about-me"><p>About me</p></nuxt-link>
        </li>
        <li class="font-bold text-lg text-white mx-4">
          <nuxt-link to="/servicios"><p>Servicios</p></nuxt-link>
        </li>
        <li class="font-bold text-lg text-white mx-4">
          <nuxt-link to="/diseño"><p>Planeación</p></nuxt-link>
        </li>
        <li class="font-bold text-lg text-white mx-4">
          <nuxt-link to="/diseño"><p>Trabajemos juntos</p></nuxt-link>
        </li>
      </ul>
    </nav>

    <button @click="openMenu()" class="the-header__menu-mb text-4xl">
      <fa-icon class="text-white mx-4 z-15 relative" :icon="['fad', 'bars']" />
      <nav>
        <ul class="the-header__collapse" :class="{ 'is-expanded': isExpanded }">
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el1"
              :class="{ 'is-expanded': isExpanded }"
              to="/about-me"
            >
              <fa-icon class="mx-4" :icon="['fas', 'user-astronaut']" />
              <p class="text-3xl font-bold">About me</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el2"
              :class="{ 'is-expanded': isExpanded }"
              to="/servicios"
            >
              <fa-icon class="mx-4" :icon="['fas', 'pen-nib']" />
              <p class="text-3xl font-bold">Servicios</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el3"
              :class="{ 'is-expanded': isExpanded }"
              to="/diseño"
            >
              <fa-icon class="mx-4" :icon="['fas', 'lightbulb-on']" />
              <p class="text-3xl font-bold">¿Cómo vamos a lograrlo?</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el4"
              :class="{ 'is-expanded': isExpanded }"
              to="/diseño"
            >
              <fa-icon class="mx-4" :icon="['fas', 'handshake']" />
              <p class="text-3xl font-bold">Trabajemos juntos</p>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </button>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => ({
    isExpanded: false
  }),
  methods: {
    openMenu() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>

<style lang="scss">
.h1-10 {
  height: 10vh;
}
</style>
