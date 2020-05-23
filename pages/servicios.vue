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
      <div class="my-6 flex mx-auto">
        <template v-for="(service, i) in allServices">
          <div :key="i" class="flex flex-col justify-center">
            <services
              :imgSrc="service.image"
              :title="service.name"
              @showText="serviceDesc()"
            />
            <div v-if="showDescription">
              <p class="slogan p-4 text-6xl bg-white">
                {{ service.name }}
              </p>
              <p class="text-white">
                {{ service.desc }}
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
import proyecto from "../assets/images/svg-draws/portfolio.svg";
import experiencia from "../assets/images/svg-draws/user-flow.svg";
import mantenimiento from "../assets/images/svg-draws/experience-design.svg";
export default {
  name: "Servicios",
  /*async asyncData() {
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
  },*/
  data: () => ({
    showDescription: false,
    allServices: [
      {
        image: proyecto,
        name: "Desarrollo web",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        show: false
      },
      {
        image: experiencia,
        name: "User Experience",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        show: false
      },
      {
        image: mantenimiento,
        name: "Diseño",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        show: false
      }
    ]
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
