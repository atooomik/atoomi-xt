<template>
  <section class="flex flex-col w-full lg:flex-row bg-atoom-gp">
    <div class="introduction lg:w-3/4 h3-4">
      <div
        class="opacityIn flex flex-col justify-center items-center w-full h-full"
      >
        <img
          class="w-40 my-8"
          src="../assets/images/svg-icons/atoomik-logo.svg"
          alt="brand logo"
        />
        <p class="text-5xl text-white">atoomik</p>
        <p class="text-3xl text-white">Consultoria web independiente</p>
      </div>
    </div>
    <div
      class="aside flex justify-around items-center h1-4 w-full lg:w-1/4 lg:flex-col bg-atoom-ylw"
    >
      <figure class="w-40 text-center">
        <img
          class="h-20 m-auto"
          src="../assets/images/svg-icons/desarrollo.svg"
          alt="developIcon"
        />
        <figcaption>
          <p class="text-2xl text-white font-bold">Desarrollo</p>
        </figcaption>
      </figure>
      <figure class="w-40 text-center">
        <img
          class="h-20 m-auto"
          src="../assets/images/svg-icons/diseño-web.svg"
          alt="responsiveIcon"
        />
        <figcaption>
          <p class=" text-2xl text-white font-bold">Diseño</p>
        </figcaption>
      </figure>
      <figure class="w-40 text-center">
        <img
          class="h-20 m-auto"
          src="../assets/images/svg-icons/ux-ui.svg"
          alt="uxIcon"
        />
        <figcaption>
          <p class=" text-2xl text-white font-bold">UX & UI</p>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHero"
};
</script>

<style lang="scss">
.h3-4 {
  height: 70vh;
  @media (min-width: 1024px) {
    height: 90vh;
  }
}

.h1-4 {
  height: 20vh;
  @media (min-width: 1024px) {
    height: 90vh;
  }
}
</style>
