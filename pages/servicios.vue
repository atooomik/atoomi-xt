<template>
  <section class="bg-atoom-bl">
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
      <div class="my-6">
        <div class="flex justify-center w-full">
          <services
            :imgSrc="require('~/assets/images/svg-draws/portfolio.svg')"
            :title="'Desarrollo Web'"
            @showText="serviceDesc()"
          />
          <services
            :imgSrc="require('~/assets/images/svg-draws/user-flow.svg')"
            :title="'User Experience'"
            @showText="serviceDesc()"
          /><services
            :imgSrc="require('~/assets/images/svg-draws/experience-design.svg')"
            :title="'Desarrollo Web'"
            @showText="serviceDesc()"
          />
        </div>
        <div class="w-1/2 mx-auto my-6">
          <div v-if="showDescription">
            <p class="slogan p-4 text-6xl bg-white">
              Desarrollo web
            </p>
            <p class="text-white">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div v-else class=" w-full h-64 bg-atoom-ylw">
            <p class="text-white text-2xl">
              Selecciona una imagen para saber mas
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "../components/HoverCards.vue";
export default {
  name: "Servicios",
  data: () => ({
    showDescription: false
  }),
  components: {
    Services
  },
  methods: {
    serviceDesc() {
      this.showDescription = !this.showDescription;
      console.log("Its working");
    }
  }
};
</script>

<style></style>
