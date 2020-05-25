<template>
  <section class="bg-atoom-bl min-h-partial">
    <div class="contain flex flex-col">
      <div class="my-4">
        <p class="slogan p-4 text-6xl">Servicios</p>
        <p class="text-white">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
      <div class="my-6 flex justify-around">
        <template v-for="(service, i) in allServices">
          <div :key="i" class="flex">
            <services
              :imgSrc="service.image"
              :title="service.name"
              @showText="clickedItem(i)"
            />
          </div>
        </template>
      </div>
      <div class="mx-auto">
        <div v-if="showSelectedItem" class=" p-8 bg-atoom-ylw">
          <p v-text="showSelectedItem.desc"></p>
          <img :src="showSelectedItem.image" class="h-64" alt="" />
        </div>
        <div v-else class=" p-8 bg-atoom-ylw">
          <p>
            Selecciona un servicio para saber acerca de el
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "../components/HoverCards.vue";
import proyecto from "../assets/images/svg-draws/portfolio.svg";
import experiencia from "../assets/images/svg-draws/user-flow.svg";
import mantenimiento from "../assets/images/svg-draws/experience-design.svg";
export default {
  name: "Servicios",
  data: () => ({
    selectedItem: null,
    allServices: [
      {
        image: proyecto,
        name: "Desarrollo web",
        desc:
          "Lorem ipsum dolor 1 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 0
      },
      {
        image: experiencia,
        name: "User Experience",
        desc:
          "Lorem ipsum dolor 2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 1
      },
      {
        image: mantenimiento,
        name: "Diseño",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 2
      }
    ]
  }),
  components: {
    Services
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
      console.log(this.selectedItem);
    }
  }
};
</script>

<style></style>
