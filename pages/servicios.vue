<template>
  <section class="ylw-bl-grad">
    <div>
      <div class="w-full">
        <div class="h-screen flex flex-col justify-between lg:flex-row lg:items-center">
          <div class="w-full mt-24 overflow-hidden lg:w-1/2 lg:my-8">
            <div class="entrance px-8 text-center lg:text-right">
              <p class="text-4xl text-white font-thin lg:text-xxl">Servicios</p>
              <p class="text-lg text-white">Más que el desarrollo de un sitio web.</p>
            </div>
            <span class="flex justify-end mr-40">
              <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
            </span>
          </div>
          <div class="flex p-8 min-h-partial lg:w-1/2 lg:min-h-adjust">
            <img
              class="max-w-xl w-full mx-auto"
              src="../assets/images/svg-draws/feeling-proud.svg"
              alt="services asset"
            />
          </div>
        </div>
      </div>
      <!--Page content-->
      <div class="w-full py-8">
        <div class="contain">
          <div>
            <p class="text-white mb-4">
              ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
              valor de un desarrollo que queda en mis manos, son los pequeños
              detalles que pueden convertirlo en una de las mejores inversiones
              que realices, que tengan lo necesario para satisfacer tus
              necesidades actuales, pero sin que esto signifique que tu sitio no
              pueda crecer contigo en el futuro y que puedas contar con él en
              todo momento.
            </p>
            <p class="text-white">
              Aquí puedo explicarte más específicamente de aquello que le da
              valor a mis proyectos.
            </p>
          </div>
          <div v-if="isMobile" class="my-6 flex flex-col lg:justify-around lg:flex-row">
            <vue-carousel
              :per-page-custom="[
                [0, 1],
                [640, 2],
              ]"
              paginationColor="#e4c85e"
              paginationActiveColor="#ffffff"
              :navigationEnabled="true"
              :loop="true"
              autoplay="true"
            >
              <vue-slide v-for="(item, i) in services" :key="i" class="p-4">
                <services :imgSrc="`images/svg-draws/${item.image}`" :title="item.name" :description="item.desc" />
              </vue-slide>
            </vue-carousel>
          </div>
          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-white rounded-pill bg-atoom-ylw shadow-lg"
            >Comencemos</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueCarousel from "vue-carousel/src/Carousel.vue";
import VueSlide from "vue-carousel/src/Slide.vue";

import Services from "../components/HoverCards.vue";
import { services } from "../assets/data/servicios.json";

export default {
  name: "Servicios",
  asyncData() {
    return {
      services,
    };
  },
  data: () => ({
    services: [],
    isMobile: false,
  }),
  components: {
    Services,
    VueCarousel,
    VueSlide,
  },
  mounted() {
    this.mobileScreen();
    window.addEventListener("resize", this.mobileScreen);
  },
  methods: {
    mobileScreen() {
      this.isMobile = window.innerWidth < 1024;
      console.log(this.isMobile);
    },
  },
};
</script>
