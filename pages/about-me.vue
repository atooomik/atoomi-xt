<template>
  <section class="sln-gp-grad">
    <div class="contain pb-8 lg:pb-8">
      <div class="flex flex-col lg:flex-row">
        <div
          class="relative traslate-shadow-entrance w-7/10 h-72 mx-auto overflow-hidden rounded-lg md:w-2/5 lg:w-1/4 lg:mt-40"
        >
          <img
            class="absolute w-full h-full object-cover"
            src="~/assets/images/profile-picture.jpg"
            alt
          />
        </div>
        <div class=" w-3/4">
          <div
            class="opacity-entrance px-8 pb-8 lg:pl-16 lg:mt-20 text-white text-left"
          >
            <p
              class="pb-8 mt-4 text-4xl text-center lg:text-left lg:font-thin lg:text-xxl lg:text-atoom-semiGray lg:pl-4  "
            >
              About me
            </p>
            <div class="px-8 lg:mt-20">
              <p class="mb-4">
                Isacc Núñez, apasionado por la tecnología y el diseño web,
                egresado de BEDU Tech donde inicie mi formación como
                desarrollador Frontend & UX.
              </p>
              <p class="mb-4">
                Antes de comenzar como desarrollador, tuve la oportunidad de
                desempeñarme en el área de atención al cliente, por lo que hoy
                entiendo la necesidad de crear productos digitales pensados para
                el usuario final. Esto es algo que tengo presente cada proyecto
                en el que me involucro.
              </p>
              <p class="mb-4">
                Actualmente trabajo como Frontend Developer en "dinamo Agencia
                de comunicación y diseño" y estoy en constante aprendizaje para
                especializarme como uno de los mejores diseñadores y animadores
                del desarrollo web.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p
          class="pb-8 text-2xl text-center text-white lg:text-left lg:text-3xl"
        >
          Algunos de mis proyectos:
        </p>
        <div class=" grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-c">
          <modalcards
            v-for="(item, i) in portafolio"
            :key="i"
            :proyect-title="item.name"
            :proyect-tasks="item.tasks"
            :imgSrc="`images/portafolio/${item.img}`"
          >
            <template v-slot:carousel>
              <vue-carousel :per-page="1" :loop="true" :autoplay="true">
                <vue-slide
                  v-for="(value, index) in item.galery"
                  :key="'value' + index"
                >
                  <img :src="`images/portafolio/${value.img}`" alt="" />
                </vue-slide>
              </vue-carousel>
            </template>
            <template v-slot:tecnologies>
              <div
                v-for="(value, index) in item.tecnologies"
                :key="'value' + index"
              >
                <fa-icon
                  class="m-4 mb-2 text-black"
                  :icon="['fab', `${value.icon}`]"
                />
                <p class="text-xs text-center text-black">html 5</p>
              </div>
            </template>
          </modalcards>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { portafolio } from "~/assets/data/portafolio.json";
import Modalcards from "~/components/ModalCards.vue";
import VueCarousel from "vue-carousel/src/Carousel.vue";
import VueSlide from "vue-carousel/src/Slide.vue";
export default {
  name: "AboutMe",
  asyncData() {
    return {
      portafolio
    };
  },
  components: {
    Modalcards,
    VueCarousel,
    VueSlide
  },
  data: () => ({
    isMobile: false,
    portafolio: []
  }),
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
