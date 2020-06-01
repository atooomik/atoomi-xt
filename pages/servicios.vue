<template>
  <section>
    <div class="contain">
      <div
        class="flex flex-col justify-around min-h-adjust lg:flex-row lg:items-center"
      >
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <p class="entrance slogan text-6xl">
            Servicios
          </p>
          <p class="entrance">
            Todo lo que hay detras de un gran sitio.
          </p>
          <span class="flex">
            <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
          </span>
        </div>
        <div class="my-8 lg:w-1/2">
          <img
            class="max-w-xl w-full mx-auto"
            src="../assets/images/svg-draws/feeling-proud.svg"
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
            [1280, 4]
          ]"
          paginationColor="#e4c85e"
          paginationActiveColor="#2f2f2f"
          :navigationEnabled="true"
          :loop="true"
        >
          <vue-slide v-for="(service, i) in allServices" :key="i" class="p-4">
            <services
              :imgSrc="service.image"
              :title="service.name"
              :description="service.desc"
            />
          </vue-slide>
        </vue-carousel>
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
import responsive from "../assets/images/svg-draws/responsive-devices.svg";
export default {
  name: "Servicios",
  data: () => ({
    selectedItem: null,
    openWrapper: false,
    allServices: [
      {
        image: proyecto,
        name: "Diseño web",
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
        name: "Escalabilidad",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: responsive,
        name: "Responsividad",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        image: responsive,
        name: "Responsividad",
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
