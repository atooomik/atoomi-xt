<template>
  <section class="bg-atoom-bl">
    <div class="w-full">
      <div class="flex flex-col justify-between min-h-adjust lg:flex-row-reverse lg:items-center">
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="slogan text-4xl lg:text-xxl">Estrategia</p>
            <p class="text-lg">O sobre como vamos a crear un proyecto ganador.</p>
          </div>
          <span class="flex justify-center">
            <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
          </span>
        </div>
        <div class="flex p-8 bg-white min-h-partial lg:w-1/2 lg:min-h-adjust">
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
            <p class="slogan mt-8 mb-16º text-5xl text-center">¿Cual es el proceso?</p>
          </div>
          <vue-carousel
            :per-page-custom="[
                [0, 1]
              ]"
            paginationActiveColor="#2f2f2f"
            :navigationEnabled="true"
            :loop="true"
          >
            <vue-slide v-for="(item, i) in process" :key="i">
              <div class="relative flex flex-col lg:flex-row lg:min-h-partial">
                <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
                  <div class="slogan flex items-center mx-auto mb-6 rounded-lg bg-white lg:ml-0">
                    <p
                      :class="`mx-auto pr-4 text-5xl font-bold text-atoom-${item.theme} border-r-8 border-atoom-${item.theme} lg:mx-0`"
                    >{{item.step}}</p>
                    <p class="pl-6 text-atoom-dk text-5xl font-bold">
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
