<template>
  <div
    id="header"
    class="the-header h-1/10"
    :class="{
      'bg-transparent': scrollState === 'isInTop',
      'bg-atoom-dk': scrollState === 'isFarFromTop'
    }"
  >
    <div class="the-header__brand">
      <nuxt-link class="flex items-center" to="/">
        <img
          class="w-12 h-12 lg:w-16 lg:h-16"
          src="~/assets/images/svg-icons/atoomik-logo.svg"
          alt=""
        />
        <p class="text-lg text-white">atoomik</p>
      </nuxt-link>
    </div>
    <!--Menu desktop-->
    <nav>
      <ul class="the-header__menu-dk">
        <li class="mx-2">
          <button
            class="the-header__btn-ghost"
            :class="{
              'the-header__btn-solid': scrollState === 'isFarFromTop'
            }"
          >
            <nuxt-link class="font-light" to="/portafolio">
              Portafolio
            </nuxt-link>
          </button>
        </li>
        <li class="font-bold text-lg text-white mx-2 p-4">
          <button
            class="the-header__btn-ghost"
            :class="{
              'the-header__btn-solid': scrollState === 'isFarFromTop'
            }"
          >
            <nuxt-link class="font-light" to="/servicios">
              Servicios
            </nuxt-link>
          </button>
        </li>
        <li class="font-bold text-lg text-white mx-2 p-4">
          <button
            class="the-header__btn-ghost"
            :class="{
              'the-header__btn-solid': scrollState === 'isFarFromTop'
            }"
          >
            <nuxt-link class="font-light" to="/metodologia">
              Metodología
            </nuxt-link>
          </button>
        </li>
        <li class="font-bold text-lg text-white mx-2 p-4">
          <button
            class="the-header__btn-ghost"
            :class="{
              'the-header__btn-solid': scrollState === 'isFarFromTop'
            }"
          >
            <nuxt-link class="font-light" to="/contacto">
              Contáctame
            </nuxt-link>
          </button>
        </li>
      </ul>
    </nav>
    <!--Menu mobil-->
    <button @click="openMenu()" class="the-header__menu-mb text-4xl">
      <fa-icon class="text-white mx-4 z-15 relative" :icon="['fas', 'bars']" />
      <nav>
        <ul class="the-header__collapse" :class="{ 'is-expanded': isExpanded }">
          <nuxt-link
            class="the-header__collapse-item my-4"
            :class="{ 'is-expanded': isExpanded }"
            to="/"
          >
            <li class="flex items-baseline">
              <fa-icon class="mx-4" :icon="['fas', 'home']" />
              <p class="text-lg text-white">Inicio</p>
            </li>
          </nuxt-link>
          <nuxt-link
            class="the-header__collapse-item my-4"
            :class="{ 'is-expanded': isExpanded }"
            to="/portafolio"
          >
            <li class="flex items-baseline">
              <fa-icon class="mx-4" :icon="['fas', 'briefcase']" />
              <p>Portafolio</p>
            </li>
          </nuxt-link>
          <nuxt-link
            class="the-header__collapse-item my-4"
            :class="{ 'is-expanded': isExpanded }"
            to="/servicios"
          >
            <li class="flex items-baseline">
              <fa-icon class="mx-4" :icon="['fas', 'laptop-code']" />
              <p>Servicios</p>
            </li>
          </nuxt-link>
          <nuxt-link
            class="the-header__collapse-item my-4"
            :class="{ 'is-expanded': isExpanded }"
            to="/metodologia"
          >
            <li class="flex items-baseline">
              <fa-icon class="mx-4" :icon="['fas', 'cogs']" />
              <p>Metodología</p>
            </li>
          </nuxt-link>
          <nuxt-link
            class="the-header__collapse-item my-4"
            :class="{ 'is-expanded': isExpanded }"
            to="/contacto"
          >
            <li class="flex items-baseline">
              <fa-icon class="mx-4" :icon="['fas', 'handshake']" />
              <p>Contáctame</p>
            </li>
          </nuxt-link>
        </ul>
      </nav>
    </button>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data: () => ({
    isExpanded: false,
    scrollState: "idle"
  }),
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
    this.navigationHasStarted();
  },
  methods: {
    updateScroll() {
      if (window.scrollY < 100) {
        this.scrollState = "isInTop";
        //console.log(this.scrollState);
      } else if (window.scrollY > 100) {
        this.scrollState = "isFarFromTop";
        //console.log(this.scrollState);
      }
    },
    navigationHasStarted() {
      if (window.scrollY > 200) {
        this.scrollState = "isFarFromTop";
        console.log("It's working");
      }
    },
    openMenu() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>
