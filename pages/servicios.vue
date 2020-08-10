<template>
  <section class="ylw-bl-grad">
    <div>
      <div class="w-full">
        <div class="h-screen flex flex-col justify-between lg:flex-row lg:items-center">
          <div class="w-full my-8 overflow-hidden lg:w-1/2">
            <div class="entrance px-8 text-center lg:text-right">
              <p class="text-4xl font-thin lg:text-xxl">Servicios</p>
              <p class="text-lg text-white">Más que el desarrollo de un sitio web.</p>
            </div>
            <span class="flex justify-center">
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
      <div class="w-full p-8">
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
            <p>
              Aquí puedo explicarte más específicamente de aquello que le da
              valor a mis proyectos.
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
          "Lorem ipsum dolor 1 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: experiencia,
        name: "User Experience",
        desc:
          "Lorem ipsum dolor 2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: mantenimiento,
        name: "Escalabilidad",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: responsive,
        name: "Responsividad",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        image: responsive,
        name: "Responsividad",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  }),
  components: {
    Services,
    VueCarousel,
    VueSlide,
  },
  computed: {
    showSelectedItem() {
      if (this.selectedItem === null) return null;
      return this.allServices[this.selectedItem] || null;
    },
  },
  methods: {
    clickedItem(index) {
      this.selectedItem = index;
      this.openWrapper = !this.openWrapper;
      console.log(this.selectedItem, this.showWrapper);
    },
  },
};
</script>
