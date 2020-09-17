<template>
  <section class="sln-gp-grad">
    <div class="contain">
      <div class="flex flex-col lg:flex-row">
        <div class="w-4/5 pt-24 mx-auto md:w-2/5 lg:w-1/4 lg:pt-0 lg:mx-0">
          <div
            class="relative traslate-shadow-entrance h-72 mx-auto overflow-hidden rounded-lg  lg:mt-40"
          >
            <img
              class="absolute w-full h-full object-cover"
              src="~/assets/images/profile-picture.jpg"
              alt="Fotografia de perfil"
            />
          </div>
        </div>
        <div class="lg:w-3/4">
          <div
            class="opacity-entrance pb-8 lg:pl-20 lg:mt-20 text-white text-left"
          >
            <p
              class="mt-4 text-4xl text-center lg:text-left lg:font-thin lg:text-xxl lg:text-atoom-semiGray lg:pl-4  "
            >
              About me
            </p>
            <div class="lg:pr-8 lg:pl-16 lg:mt-20">
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
          Proyectos en los que he trabajado:
        </p>
        <div
          class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 justify-items-center"
        >
          <modalcards
            v-for="(item, i) in portafolio"
            :key="i"
            :imgSrc="`images/portafolio/${item.cover}`"
            :proyect-title="item.name"
            :proyect-tasks="item.tasks"
            :proyect-challenges="item.challenges"
            :proyect-theme="item.theme"
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
                  class="m-4 mb-2 text-atoom-dkOverlay"
                  :icon="['fab', `${value.icon}`]"
                />
                <p
                  v-text="value.name"
                  class="text-xs text-center text-black"
                ></p>
              </div>
              <div
                v-for="(value, index) in item.specialItems"
                :key="'value' + index"
              >
                <img
                  class="w-8 h-8 m-4 mb-2"
                  :src="`images/aux-icons/${value.icon}`"
                  alt=""
                />
                <p
                  v-text="value.name"
                  class="text-xs text-center text-black"
                ></p>
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
    portafolio: []
  })
};
</script>
