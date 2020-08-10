<template>
  <section class="bl-gp-grad">
    <div class="w-full">
      <div class="h-screen flex flex-col justify-between lg:flex-row-reverse lg:items-center">
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="font-thin text-4xl text-atoom-salmn lg:text-xxl">Estrategia</p>
            <p class="text-lg">O sobre como vamos a crear un proyecto ganador.</p>
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
            <br />
            <p class="my-8 text-6xl font-thin text-center text-atoom-salmn">¿Cuál es el proceso?</p>
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
                <div class="lg:w-3/5 flex flex-col py-4 pr-8">
                  <div class="flex flex-col">
                    <figure class="flex w-16 h-16 rounded-full">
                      <p class="mx-auto text-xxl font-bold text-atoom-salmnSoft">{{ item.step }}</p>
                    </figure>
                    <p class="ml-20 text-white text-5xl">
                      {{ item.title }}
                      <span class="font-bold">{{ item.name }}</span>
                    </p>
                  </div>
                  <div class="p-4 text-white">
                    <p>{{ item.desc }}</p>
                  </div>
                </div>
                <div class="relative py-4 px-8 overflow-hidden lg:w-2/5 lg:h-76">
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
import { process } from "../assets/data/proceso.json";

export default {
  name: "Estrategia",
  asyncData() {
    return {
      process,
    };
  },
  data() {
    return {
      process: [],
    };
  },
  components: {
    VueCarousel,
    VueSlide,
  },
};
</script>
