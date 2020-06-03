<template>
  <section class="flex flex-col w-full lg:flex-row bg-atoom-gp">
    <div class="introduction lg:w-3/4 h3-4">
      <div class="flex flex-col p-4 justify-center items-center w-full h-full">
        <img
          class="w-40 my-8"
          src="../assets/images/svg-icons/atoomik-logo.svg"
          alt="brand logo"
        />
        <p class="text-5xl text-white">atoomik</p>
        <p class="text-3xl text-white text-center leading-tight">
          Consultoria web independiente
        </p>
      </div>
    </div>
    <div
      class="aside w-full flex justify-around items-center p-4 h1-4 lg:w-1/4 lg:flex-col bg-atoom-ylw"
    >
      <figure class="w-40 text-center">
        <svg-icon class="h-20 w-20 m-auto" name="desarrollo" />
        <figcaption>
          <p class="text-2xl text-white font-bold">Desarrollo</p>
        </figcaption>
      </figure>
      <figure class="w-40 text-center">
        <svg-icon class="h-20 w-20 m-auto" name="diseno-web" />
        <figcaption>
          <p class=" text-2xl text-white font-bold">Diseño</p>
        </figcaption>
      </figure>
      <figure class="w-40 text-center">
        <svg-icon class="h-20 w-20 m-auto" name="ux-ui" />
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
