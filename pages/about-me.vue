<template>
  <section class="sln-gp-grad lg:h-screen">
    <div v-if="isMobile">
      <div class="flex flex-col pt-24 pb-8">
        <div
          class="relative traslate-shadow-entrance w-3/4 md:w-2/5 h-72 mx-auto overflow-hidden rounded-lg"
        >
          <img
            class="absolute w-full h-full object-cover"
            src="../assets/images/selfie.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="opacity-entrance px-8 text-atoom-semiGray">
        <p class="pb-8 text-4xl text-center">About me</p>
        <p class="mb-4">
          Isacc Núñez, apasionado por la tecnología y el diseño web, egresado de
          BEDU Tech donde inicie mi formación como desarrollador Frontend & UX.
        </p>
        <p class="mb-4">
          Antes de comenzar como desarrollador, tuve la oportunidad de trabajar
          en atención a clientes, lo que me ha permitido entender desde una
          perspectiva más cercana las necesidades de usuarios / clientes, y esto
          es algo que siempre tengo en cuenta en cada proyecto en el que me
          involucro.
        </p>
        <p class="mb-4">
          Actualmente trabajo en dinamo Agencia de comunicación y diseño como
          Frontend Developer y mi meta es especializarme como animador web.
        </p>
      </div>
      <div class="px-8 pb-4">
        <p class="pb-8 text-2xl text-center text-atoom-semiGray">
          Mi stack de tecnologias:
        </p>
        <div
          class="grid grid-cols-4 justify-items-center text-3xl text-atoom-semiGray"
        >
          <fa-icon class="m-4" :icon="['fab', 'html5']" />
          <fa-icon class="m-4" :icon="['fab', 'css3-alt']" />
          <fa-icon class="m-4" :icon="['fab', 'sass']" />
          <fa-icon class="m-4" :icon="['fab', 'js-square']" />
          <fa-icon class="m-4" :icon="['fab', 'node']" />
          <fa-icon class="m-4" :icon="['fab', 'vuejs']" />
          <fa-icon class="m-4" :icon="['fab', 'react']" />
          <fa-icon class="m-4" :icon="['fab', 'php']" />
          <fa-icon class="m-4  col-start-2" :icon="['fab', 'wordpress']" />
          <fa-icon class="m-4  col-start-3" :icon="['fab', 'git-alt']" />
        </div>
      </div>
    </div>
    <div v-else>
      <div class="contain flex flex-col items-start min-h-adjust lg:flex-row">
        <div class="hidden lg:block lg:h-full lg:w-1/4">
          <div
            class="traslate-shadow-entrance overflow-hidden h-72 lg:mt-40 rounded-lg"
          >
            <img
              class="object-cover rounded-lg shadow-lg"
              src="../assets/images/lateral1.jpg"
              alt="profile picture"
            />
          </div>
        </div>
        <div
          class="opacity-entrance w-full lg:w-3/4 text-white text-center lg:text-left lg:mt-20 lg:pl-20"
        >
          <p
            class="text-xxl font-thin text-atoom-semiGray -mx-8 lg:pl-4 lg:mx-0"
          >
            About me
          </p>
          <div class="px-8 mt-20 pl-16">
            <p class="mb-4">
              Isacc Núñez, apasionado por la tecnología y el diseño web,
              egresado de BEDU Tech donde inicie mi formación como desarrollador
              Frontend & UX.
            </p>
            <p class="mb-4">
              Antes de comenzar como desarrollador, tuve la oportunidad de
              trabajar en atención a clientes, lo que me ha permitido entender
              desde una perspectiva más cercana las necesidades de usuarios /
              clientes, y esto es algo que siempre tengo en cuenta en cada
              proyecto en el que me involucro.
            </p>
            <p class="mb-4">
              Actualmente trabajo en dinamo Agencia de comunicación y diseño
              como Frontend Developer y mi meta es especializarme como animador
              web.
            </p>
            <p class="mb-4 text-3xl font-thin">
              Mi stack de tecnologias:
            </p>
          </div>
          <div
            class="grid grid-cols-5 justify-items-center px-8 text-3xl text-atoom-semiGray"
          >
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'html5']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'css3-alt']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'sass']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'js-square']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'node']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'vuejs']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'react']"
            />
            <fa-icon class="m-4 opacity-icon-entrance" :icon="['fab', 'php']" />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'wordpress']"
            />
            <fa-icon
              class="m-4 opacity-icon-entrance"
              :icon="['fab', 'git-alt']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data: () => ({
    isMobile: false
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
