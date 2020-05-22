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
        <template v-for="(content, i) in allServices">
          <div :key="i" class="flex justify-center w-full">
            <services
              :imgSrc="content.image"
              :title="'content.title'"
              @showText="serviceDesc()"
            />
          </div>
          <div :key="i" class="w-1/2 mx-auto my-6">
            <div v-if="showDescription">
              <p class="slogan p-4 text-6xl bg-white">
                {{ content.title }}
              </p>
              <p class="text-white">
                {{ content.description }}
              </p>
            </div>
            <div v-else class=" w-full h-64 bg-atoom-ylw">
              <p class="text-white text-2xl">
                Selecciona una imagen para saber mas
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "../components/HoverCards.vue";
export default {
  name: "Servicios",
  async asyncData() {
    const req = require.context("~/content/", true, /\.md$/, "lazy");
    const exp = /([\w-]+)\.md$/;

    const allServices = await Promise.all(
      req.keys().map(async key => {
        const [,] = key.match(exp) || [];
        const { title, description, image } = await req(key);
        return { title, description, image };
      })
    );
    return { allServices };
  },
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
