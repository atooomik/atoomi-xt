<template>
  <section class="bg-atoom-bl">
    <div class="w-full">
      <div class="h-screen flex flex-col justify-between lg:flex-row-reverse lg:items-center">
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="font-thin text-4xl lg:text-xxl">Estrategia</p>
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
      <div class="w-full py-8 bg-white">
        <div class="contain">
          <div>
            <p>
              ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
              valor de un desarrollo que queda en mis manos, son los pequeños
              detalles que pueden convertirlo en una de las mejores inversiones
              que realices, que tengan lo necesario para satisfacer tus
              necesidades actuales, pero sin que esto signifique que tu sitio no
              pueda crecer contigo en el futuro y que puedas contar con él en
              todo momento.
            </p>
            <br />
            <p class="my-8 text-6xl font-thin text-center">¿Cual es el proceso?</p>
          </div>
          <vue-carousel
            :per-page-custom="[
                [0, 1]
              ]"
            paginationActiveColor="#2f2f2f"
            :navigationEnabled="true"
            :loop="true"
            class="bg-atoom-semiGray rounded-lg"
          >
            <vue-slide v-for="(item, i) in process" :key="i">
              <div class="flex flex-col p-4 lg:flex-row">
                <div class="lg:w-1/2 flex flex-col py-4 pr-8">
                  <div class="flex flex-col">
                    <figure :class="`flex w-16 h-16 bg-atoom-${item.theme} rounded-full`">
                      <p class="mx-auto text-5xl font-bold text-white">{{item.step}}</p>
                    </figure>
                    <p class="text-atoom-dk text-5xl">
                      {{item.title}}
                      <span
                        :class="`text-atoom-${item.theme} text-5xl font-bold`"
                      >{{item.name}}</span>
                    </p>
                  </div>
                  <div class="p-4">
                    <p>{{item.desc}}</p>
                  </div>
                </div>
                <div class="lg:w-1/2 py-4 px-8 self-center">
                  <img :src="`images/svg-draws/${item.img}`" alt="people on a meeting" />
                </div>
              </div>
            </vue-slide>
          </vue-carousel>
          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-atoom-gp border-4 border-atoom-gp rounded-lg transition-all duration-300 hover:text-white hover:bg-atoom-gp"
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
