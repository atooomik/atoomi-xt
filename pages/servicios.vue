<template>
  <section>
    <div class="contain">
      <div
        class="flex flex-col justify-around min-h-adjust lg:flex-row lg:items-center"
      >
        <div class="my-8  overflow-hidden lg:w-1/2">
          <p class="entrance slogan text-6xl border-b-4 border-atoom-dk">
            Servicios
          </p>
        </div>
        <div class="my-8 lg:w-1/2">
          <img
            class="max-w-xl w-full mx-auto"
            src="../assets/images/svg-draws/researching.svg"
            alt="services asset"
          />
        </div>
      </div>
      <div>
        <p>
          Un desarrollador puedo hacer muchas cosas por ti, si ya tienes una
          idea en mente podemos hacerla realidad, si aun no la tienes, pero
          sabes lo que quieres lograr, tambien podemos hacer grandes cosas,
          sumando tús ideas con mi experiencia, lograremos grandes cosas.
        </p>
        <br />
        <p>
          Abajo, puedes conocer más a detalle de las caracterizticas y objetivos
          que establezco en cada proyecto que dejan en mis manos.
        </p>
      </div>
      <div class="my-6 flex flex-col lg:justify-around lg:flex-row">
        <vue-carousel
          :per-page-custom="[
            [0, 1],
            [640, 2],
            [1024, 3]
          ]"
          :autoplay="false"
          :navigationEnabled="true"
          :loop="true"
        >
          <vue-slide v-for="(service, i) in allServices" :key="i" class="p-4">
            <services
              :imgSrc="service.image"
              :title="service.name"
              @showText="clickedItem(i)"
            />
          </vue-slide>
        </vue-carousel>
      </div>
      <div class="mx-auto my-6">
        <div v-if="showSelectedItem" class="init-wrapper">
          <div class="init-el w-1/2 mx-auto bg-atoom-dk">
            <p
              v-text="showSelectedItem.name"
              class="text-5xl text-atoom-ylw text-center"
            ></p>
          </div>
          <p v-text="showSelectedItem.desc" class="init-el"></p>
          <img
            :src="showSelectedItem.image"
            class="init-el h-64"
            alt="selected Item Asset"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VueCarousel from "vue-carousel/src/Carousel.vue";
import VueSlide from "vue-carousel/src/Slide.vue";

import Services from "../components/HoverCards.vue";
import proyecto from "../assets/images/svg-draws/portfolio.svg";
import experiencia from "../assets/images/svg-draws/user-flow.svg";
import mantenimiento from "../assets/images/svg-draws/experience-design.svg";
export default {
  name: "Servicios",
  data: () => ({
    selectedItem: null,
    openWrapper: false,
    allServices: [
      {
        image: proyecto,
        name: "Desarrollo web",
        desc:
          "Lorem ipsum dolor 1 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: experiencia,
        name: "User Experience",
        desc:
          "Lorem ipsum dolor 2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: mantenimiento,
        name: "Mantenimiento",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }),
  components: {
    Services,
    VueCarousel,
    VueSlide
  },
  computed: {
    showSelectedItem() {
      if (this.selectedItem === null) return null;
      return this.allServices[this.selectedItem] || null;
    }
  },
  methods: {
    clickedItem(index) {
      this.selectedItem = index;
      this.openWrapper = !this.openWrapper;
      console.log(this.selectedItem, this.showWrapper);
    }
  }
};
</script>
