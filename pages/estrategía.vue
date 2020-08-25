<template>
  <section class="bl-gp-grad">
    <div class="w-full">
      <div
        class="h-screen flex flex-col justify-center lg:flex-row-reverse lg:items-center"
      >
        <div class="w-full mt-24 overflow-hidden lg:w-1/2 lg:my-8">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="font-thin text-4xl text-atoom-salmn lg:text-xxl">
              Estrategia
            </p>
            <p class="text-lg">
              O sobre como vamos a crear un proyecto ganador.
            </p>
          </div>
          <span class="flex justify-center">
            <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
          </span>
        </div>
        <div class="flex p-8 min-h-partial lg:w-1/2 lg:min-h-adjust">
          <img
            class="max-w-xl w-full mx-auto"
            src="../assets/images/svg-draws/product-plan.svg"
            alt="services asset"
          />
        </div>
      </div>
      <!--Page content-->
      <div class="w-full py-8">
        <div class="contain">
          <div>
            <p class="text-white">
              ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
              valor de un desarrollo que queda en mis manos, son los pequeños
              detalles que pueden convertirlo en una de las mejores inversiones
              que realices, que tengan lo necesario para satisfacer tus
              necesidades actuales, pero sin que esto signifique que tu sitio no
              pueda crecer contigo en el futuro y que puedas contar con él en
              todo momento.
            </p>
            <div class="flex">
              <p
                class="my-4 mx-auto text-4xl lg:text-6xl font-thin text-center text-atoom-salmn lg:my-8"
              >
                Proceso
              </p>
            </div>
          </div>
          <vue-carousel
            :per-page-custom="[[0, 1]]"
            :navigationEnabled="true"
            :loop="true"
            :autoplaytimeout="40000"
            :autoplayhover="true"
          >
            <vue-slide v-for="(item, i) in process" :key="i">
              <div class="flex flex-col p-4 lg:flex-row">
                <div class="lg:w-3/5 flex flex-col">
                  <div class="flex flex-col">
                    <figure class="flex lg:w-16 lg:h-16">
                      <p
                        class="mx-auto text-center text-4xl lg:text-xxl font-bold text-atoom-salmnSoft"
                      >
                        {{ item.step }}
                      </p>
                    </figure>
                    <p
                      class="text-3xl text-white font-thin text-center lg:ml-20 lg:text-5xl lg:text-left"
                    >
                      {{ item.name }}
                    </p>
                  </div>
                  <div class="pt-4 text-white text-lg">
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
                <div
                  class="relative py-4 h-40 overflow-hidden lg:w-2/5 lg:h-76"
                >
                  <img
                    class="absolute w-full h-full object-contain"
                    :src="`images/svg-draws/${item.img}`"
                    alt="people on a meeting"
                  />
                </div>
              </div>
            </vue-slide>
          </vue-carousel>
          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-white rounded-lg bg-atoom-salmn shadow-lg"
            >
              Comencemos
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueCarousel from "vue-carousel/src/Carousel.vue";
import VueSlide from "vue-carousel/src/Slide.vue";
import { process } from "../assets/data/proceso.json";

export default {
  name: "Estrategia",
  asyncData() {
    return {
      process
    };
  },
  data() {
    return {
      process: []
    };
  },
  components: {
    VueCarousel,
    VueSlide
  }
};
</script>
