<template>
  <div
    id="header"
    class="the-header h-1/10"
    :class="{
      'bg-transparent': scrollState === 'isInTop',
      'bg-atoom-dk': scrollState === 'isFarFromTop'
    }"
  >
    <div class="the-header__brand z-15">
      <nuxt-link class="flex items-center" to="/">
        <img
          class="w-12 h-12 lg:w-16 lg:h-16"
          src="../assets/images/svg-icons/atoomik-logo.svg"
          alt=""
        />
        <p class="text-lg text-white">atoomik</p>
      </nuxt-link>
    </div>
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

    <button @click="openMenu()" class="the-header__menu-mb text-4xl">
      <fa-icon class="text-white mx-4 z-15 relative" :icon="['fad', 'bars']" />
      <nav>
        <ul class="the-header__collapse" :class="{ 'is-expanded': isExpanded }">
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el1"
              :class="{ 'is-expanded': isExpanded }"
              to="/portafolio"
            >
              <fa-icon class="mx-4" :icon="['fas', 'briefcase']" />
              <p class="text-3xl">Portafolio</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el2"
              :class="{ 'is-expanded': isExpanded }"
              to="/servicios"
            >
              <fa-icon class="mx-4" :icon="['fas', 'laptop-code']" />
              <p class="text-3xl">Servicios</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el3"
              :class="{ 'is-expanded': isExpanded }"
              to="/metodologia"
            >
              <fa-icon class="mx-4" :icon="['fas', 'lightbulb-on']" />
              <p class="text-3xl">Metodología</p>
            </nuxt-link>
          </li>
          <li class="my-4">
            <nuxt-link
              class="the-header__collapse-el4"
              :class="{ 'is-expanded': isExpanded }"
              to="/contacto"
            >
              <fa-icon class="mx-4" :icon="['fas', 'handshake']" />
              <p class="text-3xl">Contáctame</p>
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
