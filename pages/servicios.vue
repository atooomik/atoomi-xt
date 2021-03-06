<template>
  <section>
    <div
      class="flex flex-col justify-between lg:flex-row lg:items-center lg:min-h-screen"
    >
      <div class="w-full mt-24 overflow-hidden lg:w-1/2 lg:my-8">
        <div class="entrance px-8 text-center text-white">
          <p class="font-thin text-4xl lg:text-7xl">Servicios</p>
          <p class="text-lg">
            Más que el desarrollo de un sitio web.
          </p>
        </div>
        <span class="hidden lg:flex lg:justify-center">
          <fa-icon class="down-arrow" :icon="['fas', 'angle-double-down']" />
        </span>
      </div>
      <div class="flex mt-8 p-8 h-80 lg:w-1/2 lg:min-h-adjust">
        <img
          class="max-w-xl w-full mx-auto"
          src="~/assets/images/svg-draws/feeling-proud.svg"
          alt="services asset"
        />
      </div>
    </div>
    <!--Page content-->
    <div class="w-full py-8">
      <div class="contain">
        <div class="text-white">
          <p class="mb-4">
            ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
            valor de un desarrollo que queda en mis manos, son los pequeños
            detalles que pueden convertirlo en una de las mejores inversiones
            que realices, que tenga lo necesario para satisfacer tus necesidades
            actuales, pero sin que esto signifique que tu sitio no pueda crecer
            contigo en el futuro y que puedas contar con él en todo momento.
          </p>
          <p>
            Cuando me contratas para la creación de tu sitio, este es el
            conjunto real de servicios y caracteristicas que estaran
            implementadas en tu sitio web:
          </p>
        </div>
        <div v-if="isMobile" class="flex flex-col mt-16 mb-6 px-4">
          <vue-carousel
            :per-page-custom="[
              [0, 1],
              [640, 2]
            ]"
            paginationColor="#e4c85e"
            paginationActiveColor="#ffffff"
            :navigationEnabled="true"
            :loop="true"
          >
            <vue-slide v-for="(item, i) in services" :key="i" class="p-4">
              <services
                :imgSrc="`/images/svg-draws/${item.image}`"
                :title="item.name"
                :description="item.desc"
              />
            </vue-slide>
          </vue-carousel>
        </div>
        <div v-else>
          <div class="grid grid-cols-2 py-8">
            <hover-sides
              v-for="(card, i) in services"
              :key="i"
              :imgAsset="`/images/svg-draws/${card.image}`"
              :title="card.name"
              :resume="card.desc"
            />
          </div>
        </div>
        <div class="flex">
          <button
            class="mx-auto my-8 px-4 py-2 text-2xl text-white rounded-lg bg-atoom-salmn hover:shadow-slmn-left transition-all duration-500 ease-out"
          >
            <a href="/contacto">Contáctame</a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueCarousel from "vue-carousel/src/Carousel.vue";
import VueSlide from "vue-carousel/src/Slide.vue";

import Services from "../components/HoverCards.vue";
import HoverSides from "../components/HoverSideCards.vue";
import { services } from "~/assets/data/servicios.json";

export default {
  name: "Servicios",
  asyncData() {
    return {
      services
    };
  },
  head() {
    return {
      titleChunk: "Servicios"
    };
  },
  transition: "slide-fade",
  data: () => ({
    services: [],
    isMobile: false
  }),
  components: {
    Services,
    VueCarousel,
    VueSlide,
    HoverSides
  },
  mounted() {
    this.mobileScreen();
    window.addEventListener("resize", this.mobileScreen);
  },
  methods: {
    mobileScreen() {
      this.isMobile = window.innerWidth < 1024;
      console.log(this.isMobile);
    }
  }
};
</script>
