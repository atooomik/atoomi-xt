<template>
  <section class="bl-gp-grad">
    <div>
      <div
        class="flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:min-h-screen"
      >
        <div class="w-full mt-24 overflow-hidden lg:w-1/2 lg:my-8">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="font-thin text-4xl text-atoom-salmn lg:text-7xl">
              Metodología
            </p>
            <p class="text-lg">
              O sobre como vamos a crear un proyecto ganador.
            </p>
          </div>
          <span class="hidden lg:flex lg:justify-center">
            <fa-icon class="down-arrow" :icon="['fas', 'angle-double-down']" />
          </span>
        </div>
        <div class="flex mt-8 p-8 h-80 lg:w-1/2 lg:min-h-adjust">
          <img
            class="max-w-xl w-full mx-auto"
            src="~/assets/images/svg-draws/product-plan.svg"
            alt="services asset"
          />
        </div>
      </div>
      <!--Page content-->
      <div class="w-full py-8">
        <div class="contain">
          <div class="text-white">
            <p class="mb-4">
              Un elemento fundamental, al momento de desarrollar un producto
              exitoso, es la serie de pasos previos y posteriores a su
              lanzamiento, el desarrollo de un sitio web comienza mucho antes de
              escribir la primera línea de codigo.
            </p>
            <p>
              Por esta razón, es importante que tengas claro cual es la serie de
              pasos que voy a seguir para entregarte un mejor sitio web del que
              estabas esperando.
            </p>
          </div>
          <div class="px-4">
            <p
              class="mt-16 mb-4 mx-auto text-4xl lg:text-6xl font-thin text-center text-atoom-salmn lg:my-8"
            >
              Proceso
            </p>
            <vue-carousel
              :per-page-custom="[[0, 1]]"
              :navigationEnabled="true"
              :loop="true"
              :autoplaytimeout="40000"
              :autoplayhover="true"
            >
              <vue-slide v-for="(item, i) in process" :key="i">
                <div class="flex flex-col lg:flex-row">
                  <div class="lg:w-3/5">
                    <div class="lg:flex lg:items-baseline">
                      <p
                        class="text-center text-4xl font-bold text-atoom-salmnSoft lg:text-xxl"
                      >
                        {{ item.step }}
                      </p>
                      <p
                        class="text-center text-3xl font-thin text-white lg:ml-12 lg:text-5xl lg:text-left"
                      >
                        {{ item.name }}
                      </p>
                    </div>
                    <p class="my-4 text-white lg:mx-0">{{ item.desc }}</p>
                  </div>
                  <div
                    class="relative h-48 md:h-64 p-4 overflow-hidden lg:w-2/5 lg:h-72"
                  >
                    <img
                      class="absolute w-full h-full object-contain object-bottom lg:object-center"
                      :src="`/images/svg-draws/${item.img}`"
                      alt="people on a meeting"
                    />
                  </div>
                </div>
              </vue-slide>
            </vue-carousel>
          </div>

          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-white rounded-lg bg-atoom-salmn shadow-slmn-left"
            >
              <a href="/contacto">Contáctame</a>
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
import { process } from "~/assets/data/proceso.json";

export default {
  name: "Estrategia",
  asyncData() {
    return {
      process
    };
  },
  head() {
    return {
      titleChunk: "Metodología"
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
